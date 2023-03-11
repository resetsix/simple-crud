import { http } from "../utils/http";
import { useAuth } from "./useAuth";

export const useHttp = () => {
  const { user } = useAuth();
  return (...[url, config]: Parameters<typeof http>) =>
    http(url, { ...config, token: user?.token || "" });
};
