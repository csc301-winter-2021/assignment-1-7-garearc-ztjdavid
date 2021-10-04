import { Vue } from "vue-class-component";
import {getModule} from "vuex-module-decorators";
import ShoppingCartModule from "@/store/modules/ShoppingCartModule";

export default class LeftSide extends Vue {
  scm = getModule(ShoppingCartModule);
  quantityUpdated = false;

  CannotDrop(quantity: number): boolean{
    return quantity <= 1;
  }

  QuantityUpdated(): void{
    this.quantityUpdated = true;
  }
  DiscountFormatter(dis: number): string{
    return `${dis * 100}%OFF`;
  }

}
