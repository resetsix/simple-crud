import { useEffect } from "react";
import { User } from "../types/users";
import { useAsync } from "./useAsync";
import { useHttp } from "./useHttp";

export const useUser = (param?: Partial<User>) => {
  // 调用 自动携带token 的网络请求函数
  const client = useHttp();
  // 调用 专门处理异步结果的函数
  const { run, ...rest } = useAsync<User[]>();
  useEffect(() => {
    run(client("users"));
  }, [param]);
  // 返回拿到的结果
  return rest;
};
