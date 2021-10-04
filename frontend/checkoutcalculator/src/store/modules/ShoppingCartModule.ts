import {Module, Mutation, VuexModule} from "vuex-module-decorators";
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
    async LoadSummary(uuid: string):Promise<void> {
        await getSummary(uuid)
            .then(value => this.Summary = value.metadata)
            .catch(err => console.log(err));
    }
    @Mutation
    async UploadOrder():Promise<void> {
        let uuid = "";
        await uploadOrder(this.Order)
            .then(value => uuid = value.metadata)
            .catch(error => {
                console.log(error)
            })
        await this.LoadSummary(uuid).then(value => value);
    }

    @Mutation
    async LoadOrder(selected: Record): Promise<void>{
        if(selected === null) return;
        getOrder(selected.uuid)
            .then(value => {
                if(value.metadata.length > 0){
                    Object.assign(this.Order, value.metadata[0]);
                }
            })
        ;
    }
    @Mutation
    async LoadRecords(): Promise<void>{
        await getRecords()
            .then(value => this.Records = value.metadata)
            .catch(err => {console.log(err)});
    }

}
