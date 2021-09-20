import { Vue, Options } from "vue-class-component";

interface item{
  name: string,
  icon: string,
  quantity: number
}

export default class ShoppingCart extends Vue {
  items: item[] = [
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
    }
  ]

  CannotDrop(quantity: number): boolean{
    return quantity <= 0;
  }

  DropQ(item: item): void{
    if(item.quantity === 1){
      this.DelItem(item);
    }
    item.quantity -= 1;
  }
  AddQ(item: item): void{
    item.quantity += 1;
  }
  DelItem(item: item): void{
    this.items = this.items.filter(value => value != item);
  }
}
