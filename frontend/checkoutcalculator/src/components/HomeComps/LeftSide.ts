import { Vue } from "vue-class-component";
import {Item} from "@/model/Item.ts"
import { Prop } from "vue-property-decorator";
import { Order } from "@/model/Order";
import { getSummary, uploadOrder } from "@/api/request";

export default class LeftSide extends Vue {
  @Prop() order!: Order

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

  async uploadOrder():Promise<void> {
    let uuid = "";
    await uploadOrder(this.order)
      .then(value => uuid = value.metadata)
      .catch(error => {
        console.log(error)
      })
    await getSummary(uuid)
      .then(value => this.$emit("load-summary", value.metadata))
    ;
  }

}
