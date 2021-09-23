import { Vue } from "vue-class-component";
import {Item} from "@/model/Item.ts"

export default class LeftSide extends Vue {
  quantityUpdated = false;

  items: Item[] = [
    {
      name: "item1",
      price: 1.2,
      icon: "coffee",
      quantity: 3,
      isTaxed: false
    },
    {
      name: "item2",
      price: 22,
      icon: "coffee",
      quantity: 1,
      isTaxed: true
    },
    {
      name: "item3",
      price: 2.2,
      icon: "coffee",
      quantity: 2,
      isTaxed: false
    },
    {
      name: "item4",
      price: 10,
      icon: "coffee",
      quantity: 10,
      isTaxed: true
    }
  ]

  CannotDrop(quantity: number): boolean{
    return quantity <= 1;
  }

  DropQ(item: Item): void{
    item.quantity -= 1;
  }
  AddQ(item: Item): void{
    item.quantity += 1;
  }
  DelItem(item: Item): void{
    this.items = this.items.filter(value => value != item);
  }
  QuantityUpdated(): void{
    this.quantityUpdated = true;
  }

}
