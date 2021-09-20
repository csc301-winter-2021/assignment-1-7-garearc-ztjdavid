import { Vue, Options } from "vue-class-component";

import LeftSide from "@/components/HomeComps/LeftSide.vue";
import RightSide from "@/components/HomeComps/RightSide.vue";
@Options({
  components: {
    LeftSide,
    RightSide
  }
})
export default class ShoppingCart extends Vue {

}
