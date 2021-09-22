import { Vue } from "vue-class-component";
import {Item} from "@/model/Item"

export default class LeftSide extends Vue {
  items: Item[] = [
    {
      "name": "item1",
      "icon": "coffee",
      "quantity": 0
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
    return quantity <= 0;
  }

  DropQ(item: Item): void{
    if(item.quantity === 1){
      this.DelItem(item);
    }
    item.quantity -= 1;
  }
  AddQ(item: Item): void{
    item.quantity += 1;
  }
  DelItem(item: Item): void{
    this.items = this.items.filter(value => value != item);
  }

}
