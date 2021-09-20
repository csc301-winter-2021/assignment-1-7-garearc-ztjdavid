import axios from "axios";
import config from "@/api/config";

const instance = axios.create({
  baseURL: config.baseUrl.default,
  timeout: 10000
});

// get
export async function get<T>(url: string, params: any = {}): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    instance
      .get<T>(url, {params: params})
      .then(response => {
        resolve(response.data as T);
      })
      .catch(err => {
        reject(err)
      })
  });
}

// post
export async function post<T>(url: string, data: any = {}): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    instance
      .post(url, data)
      .then(
        (response) => {
          resolve(response.data as T);
        },
        (err) => {
          reject(err);
        });
  });
}
