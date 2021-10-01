import { shallowMount } from "@vue/test-utils";
import ShoppingCart from "@/components/HomeComps/ShoppingCart.vue";
import { Order } from "@/model/Order";

describe("ShoppingCart.vue", () => {
  it("get order prop", () => {
    const order = new Order();
    const wrapper = shallowMount(ShoppingCart, {
      props: {order}
    })
    console.log(wrapper.props());
    expect(wrapper.props().order.client).toBe("Unknown Client");
  })
})
