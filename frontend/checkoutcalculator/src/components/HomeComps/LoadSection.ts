import { Vue } from "vue-class-component";
import { Record } from "@/model/Record";
import { getOrder, getRecords } from "@/api/request";
import { Inject } from "vue-property-decorator";
import { Order } from "@/model/Order";

export default class LoadSection extends Vue {
  @Inject()
  order!: Order;

  records: Record[] = [];
  selected: Record | null = null;

  async mounted(): Promise<void> {
    this.RequestRecords().then(r => r);
  }

  async RequestRecords(): Promise<void>{
    await getRecords()
      .then(value => this.records = value.metadata)
      .catch(err => {console.log(err)});
    if(this.records.length > 0){
      this.selected = this.records[0];
    }
  }

  async LoadOrder(uuid: string): Promise<void>{
    console.log(this.order.client);
    this.order.client = "LOL";
    console.log(this.order.client);
    if(this.selected === null) return;
    await getOrder(uuid)
      .then(value => this.order = value.metadata)
      .catch(err => console.log(err));
    console.log(this.order);
  }

  getDropDownSelectedText(): string{
    return this.selected === null? "No Record" : this.selected.date;
  }

  updateSelected(record: Record): void{
    this.selected = record;
  }
}
