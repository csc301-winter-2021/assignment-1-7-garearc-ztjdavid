import {get, post} from "@/api/http";
import { Order } from "@/model/Order";
import { Response } from "@/model/Response";
import {Record} from "@/model/Record";
import { OrderSummary } from "@/model/OrderSummary";

export async function uploadOrder(order: Order): Promise<Response<string>> {
  return post<string, Order>("/order", order);
}
export async function getRecords(): Promise<Response<Record[]>>{
  return get<Record[]>("/order/records");
}
export async function getOrder(uuid:string): Promise<Response<Order[]>>{
  return get<Order[]>(`/order/${uuid}`);
}
export async function getSummary(uuid:string): Promise<Response<OrderSummary>>{
  return get<OrderSummary>(`/order/summary/${uuid}`);
}

