import { apiUrl } from "../constant/api";
import * as auth from "../api/api-provider";
import qs from "qs";

export interface IConfig extends RequestInit {
  token?: string;
  data?: object;
}

export const http = (
  url: string,
  { data, token, headers, ...rest }: IConfig = {}
) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": data ? "application/json" : "",
      Authorization: token ? `Bearer ${token}` : "",
    },
    ...rest,
  };
  if (config.method.toUpperCase() === "GET") {
    url += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data);
  }
  return fetch(`${apiUrl}/${url}`, config).then(async (res) => {
    if (res.status === 401) {
      await auth.logout();
      window.location.reload();
      return Promise.reject("请重新登录");
    }
    const result = await res.json();
    if (res.ok) {
      return result;
    } else {
      return Promise.reject(result);
    }
  });
};
