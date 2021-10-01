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
    if(this.selected === null) return;
    await getOrder(uuid)
      .then(value => {
        console.log(value.metadata);
        if (value.metadata.length === 0) return;
        this.order = value.metadata[0];
      })
      .catch(err => console.log(err));
  }

  getDropDownSelectedText(): string{
    return this.selected === null? "No Record" : this.selected.date;
  }

  updateSelected(record: Record): void{
    this.selected = record;
  }
}
