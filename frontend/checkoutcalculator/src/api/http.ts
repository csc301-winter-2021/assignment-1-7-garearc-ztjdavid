import axios from "axios";
import config from "@/api/config";
import { Response } from "@/model/Response";

const instance = axios.create({
  baseURL: config.baseUrl.default,
  timeout: 3600
});

// get
export async function get<T>(url: string, params: any = {}): Promise<Response<T>> {
  return new Promise<Response<T>>((resolve, reject) => {
    instance
      .get<Response<T>>(url, {params: params})
      .then(response => {
        resolve(response.data as Response<T>);
      })
      .catch(err => {
        reject(err)
      })
  });
}

// post
export async function post<T, M>(url: string, data: M): Promise<Response<T>> {
  return new Promise<Response<T>>((resolve, reject) => {
    instance
      .post(url, data)
      .then(
        (response) => {
          resolve(response.data as Response<T>);
        },
        (err) => {
          reject(err);
        });
  });
}
