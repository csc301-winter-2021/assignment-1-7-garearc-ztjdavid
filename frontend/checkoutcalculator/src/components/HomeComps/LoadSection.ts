import { Vue } from "vue-class-component";
import { Record } from "@/model/Record";
import {getModule} from "vuex-module-decorators";
import ShoppingCartModule from "@/store/modules/ShoppingCartModule";

export default class LoadSection extends Vue {
  scm = getModule(ShoppingCartModule);

  async mounted(): Promise<void> {
    this.scm.LoadRecords().then(r => r);
  }

  updateSelected(record: Record): void{
    this.scm.setSelectedRecord(record);
  }
}
