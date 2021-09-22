import { Vue } from "vue-class-component";
import {Item} from "@/model/Item"

export default class LeftSide extends Vue {
  items: Item[] = [
    {
      "name": "item1",
      "icon": "coffee",
      "quantity": 3
    },
    {
      "name": "item2",
      "icon": "coffee",
      "quantity": 1
    },
    {
      "name": "item3",
      "icon": "coffee",
      "quantity": 1
    },
    {
      "name": "item4",
      "icon": "coffee",
      "quantity": 2
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

}
