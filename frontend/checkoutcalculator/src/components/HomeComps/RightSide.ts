import { Vue } from "vue-class-component";
import { Inject } from "vue-property-decorator";
import { Order } from "@/model/Order";
import { uploadOrder } from "@/api/request";

export default class RightSide extends Vue {
  @Inject()
  order!: Order

  response = false


  uploadOrder() {
    uploadOrder(this.order)
      .then(value => this.response = value.metadata)
      .catch(error => {
        console.log(error)
      })
  }
}
