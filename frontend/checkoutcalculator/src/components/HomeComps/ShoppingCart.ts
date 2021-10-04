import { Vue, Options } from "vue-class-component";

import LeftSide from "@/components/HomeComps/LeftSide.vue";
import RightSide from "@/components/HomeComps/RightSide.vue";
import AddItemSection from "@/components/HomeComps/AddItemSection.vue";
import LoadSection from "@/components/HomeComps/LoadSection.vue";
@Options({
  components: {
    LeftSide,
    RightSide,
    AddItemSection,
    LoadSection
  }
})
export default class ShoppingCart extends Vue {
}
