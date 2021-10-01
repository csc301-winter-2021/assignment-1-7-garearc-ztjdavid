import { Options, Vue } from "vue-class-component";

import ShoppingCart from "@/components/HomeComps/ShoppingCart.vue";
import {Order} from "@/model/Order";
import { getOrder } from "@/api/request";

@Options({
  components: {
    ShoppingCart,
  },
})
export default class Home extends Vue {
  Order = new Order();

  async LoadOrder(uuid: string): Promise<void>{
    await getOrder(uuid)
      .then(value => {
        if (value.metadata.length === 0) return;
        Object.assign(this.Order, value.metadata[0]);
      })
      .catch(err => console.log(err));
  }
}
