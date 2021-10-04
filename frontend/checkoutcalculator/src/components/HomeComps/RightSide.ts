import { Vue } from "vue-class-component";
import {getModule} from "vuex-module-decorators";
import ShoppingCartModule from "@/store/modules/ShoppingCartModule";

export default class RightSide extends Vue {
  scm = getModule(ShoppingCartModule);

  showSummary():string{
    if(this.scm.Summary === null) return "Please upload current order or load a history order.";
    return `Total price: ${this.scm.Summary.total}`;
  }
}
