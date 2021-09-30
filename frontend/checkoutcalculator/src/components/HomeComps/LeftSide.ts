import { Vue } from "vue-class-component";
import {Item} from "@/model/Item.ts"
import { Inject } from "vue-property-decorator";
import { Order } from "@/model/Order";

export default class LeftSide extends Vue {
  @Inject()
  order!: Order

  quantityUpdated = false;

  CannotDrop(quantity: number): boolean{
    return quantity <= 1;
  }

  DropQ(item: Item): void{
    this.order.DropQ(item);
  }
  AddQ(item: Item): void{
    this.order.AddQ(item);
  }
  DelItem(item: Item): void{
    this.order.DelItem(item);
  }
  QuantityUpdated(): void{
    this.quantityUpdated = true;
  }
  DiscountFormatter(dis: number): string{
    return `${dis * 100}%OFF`;
  }


}
