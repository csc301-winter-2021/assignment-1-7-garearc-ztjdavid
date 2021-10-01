import { Vue, Options } from "vue-class-component";

import LeftSide from "@/components/HomeComps/LeftSide.vue";
import RightSide from "@/components/HomeComps/RightSide.vue";
import AddItemSection from "@/components/HomeComps/AddItemSection.vue";
import LoadSection from "@/components/HomeComps/LoadSection.vue";
import { Prop } from "vue-property-decorator";
import { Order } from "@/model/Order";
import { OrderSummary } from "@/model/OrderSummary";
@Options({
  components: {
    LeftSide,
    RightSide,
    AddItemSection,
    LoadSection
  }
})
export default class ShoppingCart extends Vue {
  @Prop() order!: Order;

  os: OrderSummary | null = null;

  LoadOrderEvent(uuid:string): void{
    this.$emit("load-order", uuid);
  }

  LoadSummaryEvent(os: OrderSummary):void {
    this.os = os;
  }
}
