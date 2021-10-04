import { Vue } from "vue-class-component";
import { Record } from "@/model/Record";
import { getRecords, getSummary } from "@/api/request";
import { Prop } from "vue-property-decorator";
import { Order } from "@/model/Order";

export default class LoadSection extends Vue {
  @Prop() order!: Order

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

  LoadOrderEvent(): void{
    if(this.selected === null) return;
    this.$emit("load-order", this.selected.uuid);
    getSummary(this.selected.uuid)
      .then(value => this.$emit("load-summary", value.metadata))
    ;
  }

  getDropDownSelectedText(): string{
    return this.selected === null? "No Record" : this.selected.date;
  }

  updateSelected(record: Record): void{
    this.selected = record;
  }
}
