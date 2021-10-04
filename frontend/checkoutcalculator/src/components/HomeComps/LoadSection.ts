import { Vue } from "vue-class-component";
import { Record } from "@/model/Record";
import {getModule} from "vuex-module-decorators";
import ShoppingCartModule from "@/store/modules/ShoppingCartModule";

export default class LoadSection extends Vue {
  scm = getModule(ShoppingCartModule);

  selected: Record | null = null;

  async mounted(): Promise<void> {
    this.RequestRecords().then(r => r);
  }

  async RequestRecords(): Promise<void>{
    await this.scm.LoadRecords();
    if(this.scm.Records.length > 0){
      this.selected = this.scm.Records[0];
    }
  }

  getDropDownSelectedText(): string{
    return this.selected === null? "No Record" : this.selected.date;
  }

  updateSelected(record: Record): void{
    this.selected = record;
  }
}
