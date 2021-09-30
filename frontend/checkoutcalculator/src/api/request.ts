import {get, post} from "@/api/http";
import { Order } from "@/model/Order";
import { Response } from "@/model/Response";
import {Record} from "@/model/Record";

export async function uploadOrder(order: Order): Promise<Response<boolean>> {
  return post<boolean, Order>("/order", order);
}
export async function getRecords(): Promise<Response<Record[]>>{
  return get<Record[]>("/order/records");
}
export async function getOrder(uuid:string): Promise<Response<Order>>{
  return get<Order>(`/order/${uuid}`);
}

