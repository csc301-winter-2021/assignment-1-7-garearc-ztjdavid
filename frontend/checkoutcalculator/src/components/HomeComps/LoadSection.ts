import { Vue } from "vue-class-component";
import { Record } from "@/model/Record";
import { getRecords } from "@/api/request";
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
    if(this.selected !== null) this.$emit("load-order", this.selected.uuid);
  }

  getDropDownSelectedText(): string{
    return this.selected === null? "No Record" : this.selected.date;
  }

  updateSelected(record: Record): void{
    this.selected = record;
  }
}
