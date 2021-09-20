import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Order } from "@/model/Order";
import { OrderSummary } from "@/model/OrderSummary";

export default class RightSide extends Vue {
  @Prop() order!: Order;
  @Prop() os!: OrderSummary | null;

  showSummary():string{
    if(this.os === null) return "Please upload current order or load a history order.";
    return `Total price: ${this.os.total}`;
  }
}
