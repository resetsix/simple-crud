import { useEffect } from "react";
import { User } from "../types/users";
import { useAsync } from "./useAsync";
import { useHttp } from "./useHttp";

export const useUser = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...rest } = useAsync<User[]>();
  useEffect(() => {
    run(client("users"));
  }, [param]);
  return rest;
};
