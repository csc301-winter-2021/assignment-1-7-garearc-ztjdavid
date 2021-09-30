import { Vue } from "vue-class-component";
import { Record } from "@/model/Record";
import { getRecords } from "@/api/request";

export default class LoadSection extends Vue {
  records: Record[] = [];
  selected: Record | null = null;

  created(): void{
    this.RequestRecords().then(r => r);
  }

  async RequestRecords(): Promise<void>{
    await getRecords()
      .then(value => this.records = Object.assign({}, value.metadata))
      .catch(err => {console.log(err)});
    this.initSelected();
  }

  LoadOrderEvent(): void{
    if(this.selected === null) return;
    this.$emit("load-order", this.selected.uuid);
  }

  initSelected(): void{
    if(this.records.length !== 0){
      this.selected = this.records[0];
    }
  }

  getDropDownSelectedText(): string{
    return this.selected === null? "No Record" : this.selected.date;
  }

  updateSelected(record: Record): void{
    this.selected = record;
  }
}
