import {get, post} from "@/api/http";
import { Order } from "@/model/Order";
import { Response } from "@/model/Response";

export async function uploadOrder(order: Order): Promise<Response<boolean>> {
  return post<boolean>("", order);
}
