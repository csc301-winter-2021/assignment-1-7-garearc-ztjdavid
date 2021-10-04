import { Options, Vue } from "vue-class-component";

import ShoppingCart from "@/components/HomeComps/ShoppingCart.vue";

@Options({
  components: {
    ShoppingCart,
  },
})
export default class Home extends Vue {
}
