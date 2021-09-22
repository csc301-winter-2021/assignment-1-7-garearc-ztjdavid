import { Item } from "@/model/Item";

export interface Order {
  orderList: Item[],
  client: string,
  date: string
}
