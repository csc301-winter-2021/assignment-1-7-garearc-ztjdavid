import { Vue } from "vue-class-component";
import { Inject } from "vue-property-decorator";
import { Order } from "@/model/Order";
import { Item } from "@/model/Item";


export default class AddItemSection extends Vue {
  @Inject()
  order!: Order

  currItem = {
    discount: "0.1",
    icon: "coffee",
    isTaxed: false,
    name: "",
    price: "1.00",
    quantity: "1"
  }

  AddItem(e: Event): void{
    e.preventDefault();
    const newItem = this.getItem();
    if(newItem !== null) this.order.AddItem(newItem);
  }

  private getItem(): Item | null{
    const item: Item = {
      discount: 0, icon: "coffee", isTaxed: false, name: "", price: 0, quantity: 0
    };
    if(this.currItem.name === ""){
      alert("Name of the item cannot be empty.");
      return null;
    }else item.name = this.currItem.name;

    if(this.currItem.price === ""){
      alert("Invalid price");
      return null;
    }else item.price = Number(this.currItem.price);

    if(this.currItem.quantity === "" || !Number.isSafeInteger(Number((this.currItem.quantity)))){
      alert("Invalid quantity.");
      return null;
    }else item.quantity = parseInt(this.currItem.quantity);

    if(this.currItem.discount === ""
      || isNaN(Number(this.currItem.discount))
      || Number(this.currItem.discount) > 1
      || Number(this.currItem.discount) < 0){
      alert("Invalid discount. Should be in range [0, 1].");
      return null;
    }else item.discount = Number(this.currItem.discount);

    item.isTaxed = this.currItem.isTaxed;
    return item;
  }



}
