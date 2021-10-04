import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store";
import {Order} from "@/model/Order";
import {OrderSummary} from "@/model/OrderSummary";
import {Item} from "@/model/Item";
import {getOrder, getRecords, getSummary, uploadOrder} from "@/api/request";
import {Record} from "@/model/Record";

@Module({name:"scm", dynamic: true, store})
export default class ShoppingCartModule extends VuexModule {
    Order: Order = new Order();
    Summary: OrderSummary | null = null;
    Records: Record[] = [];
    selectedRecord: Record | null = null;

    get getDropDownSelectedText(): string{
        return this.selectedRecord === null? "No Record" : this.selectedRecord.date;
    }

    @Mutation
    DropQ(item: Item): void{
        this.Order.DropQ(item);
    }
    @Mutation
    AddQ(item: Item): void{
        this.Order.AddQ(item);
    }
    @Mutation
    DelItem(item: Item): void{
        this.Order.DelItem(item);
    }
    @Mutation
    AddItem(item: Item): void{
        this.Order.AddItem(item);
    }
    @Mutation
    setOrder(newOrder: Order):void{
        Object.assign(this.Order, newOrder);
    }
    @Mutation
    setRecords(newRecords: Record[]):void{
        this.Records = newRecords;
    }
    @Mutation
    setSummary(newSummary: OrderSummary):void{
        this.Summary = newSummary;
    }
    @Mutation
    setSelectedRecord(r: Record):void{
        this.selectedRecord = r;
    }
    @Action
    async LoadSummary(uuid: string):Promise<void> {
        await getSummary(uuid)
            .then(value => this.setSummary(value.metadata))
            .catch(err => console.log(err));
    }
    @Action
    async UploadOrder():Promise<void> {
        let uuid = "";
        await uploadOrder(this.Order)
            .then(value => uuid = value.metadata)
            .catch(error => {
                console.log(error)
            })
        await this.LoadSummary(uuid).then(value => value);
        await this.LoadRecords();
    }

    @Action
    async LoadRecords(): Promise<void>{
        await getRecords()
            .then(value => this.setRecords(value.metadata))
            .catch(err => {console.log(err)});
        if(this.selectedRecord === null && this.Records.length > 0){
            this.setSelectedRecord(this.Records[0]);
        }
    }

    @Action
    async LoadOrder(): Promise<void>{
        if(this.selectedRecord === null) return;
        getOrder(this.selectedRecord.uuid)
            .then(value => {
                if(value.metadata.length > 0){
                    this.setOrder(value.metadata[0]);
                }
            })
        ;
    }

}
