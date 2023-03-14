import { useCallback } from "react";
import { http } from "../utils/http";
import { useAuth } from "./useAuth";

export const useHttp = () => {
  const { user } = useAuth();
  /* 
    每当custom hook 暴露一个函数的时候，都需要注意是否用useCallback包裹起来
      useCallback的作用：避免重复创建函数，以提高react性能
  */
  return useCallback(
    (...[url, config]: Parameters<typeof http>) =>
      http(url, { ...config, token: user?.token || "" }),
    [user?.token]
  );
};
