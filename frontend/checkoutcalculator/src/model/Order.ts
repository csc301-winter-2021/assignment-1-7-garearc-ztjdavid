import { Item } from "@/model/Item";

export class Order {
  uuid: string;
  orderList: Item[];
  client: string;
  date: string;

  constructor(uuid= "",
              client= "Unknown Client",
              list: Item[] = [],
              data= "") {
    this.uuid = uuid;
    this.client = client;
    this.orderList = list;
    this.date = data
  }

  DropQ(item: Item): void{
    item.quantity -= 1;
  }
  AddQ(item: Item): void{
    item.quantity += 1;
  }
  AddItem(item: Item): void{
    this.orderList.push(item);
  }
  DelItem(item: Item): void{
    this.orderList = this.orderList.filter(value => value != item);
  }
}
