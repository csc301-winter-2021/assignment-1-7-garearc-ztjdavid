import { Options, Vue } from "vue-class-component";

import ShoppingCart from "@/components/HomeComps/ShoppingCart.vue";
import { Item } from "@/model/Item";
import { Provide } from "vue-property-decorator";
import {Order} from "@/model/Order";

@Options({
  components: {
    ShoppingCart
  },
})
export default class Home extends Vue {
  items: Item[] = [
    {
      name: "item1",
      price: 1.2,
      icon: "coffee",
      quantity: 3,
      isTaxed: false,
      discount: 0
    },
    {
      name: "item2",
      price: 22,
      icon: "coffee",
      quantity: 1,
      isTaxed: true,
      discount: 0
    },
    {
      name: "item3",
      price: 2.2,
      icon: "coffee",
      quantity: 2,
      isTaxed: false,
      discount: 0
    },
    {
      name: "item4",
      price: 10,
      icon: "coffee",
      quantity: 10,
      isTaxed: true,
      discount: 0
    }
  ]

  Order: Order = new Order(undefined, undefined, this.items, undefined);


  @Provide()
  order = this.Order

}
