import React, { ReactNode, useState } from "react";
import * as auth from "../api/api-provider";
import { useMount } from "../hooks/useMount";
import { IAuth } from "../types/IAuth";
import { User } from "../types/users";
import { http } from "../utils/http";

const bootStrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

export const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (data: IAuth) => Promise<void>;
      register: (data: IAuth) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (data: IAuth) => auth.login(data).then(setUser);
  const register = (data: IAuth) => auth.register(data).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(() => {
    bootStrapUser().then(setUser);
  });

  // const login = async (data: IAuth) => {
  //   await auth.register(data).then(setUser);
  // };

  // const register = async (data: IAuth) => {
  //   await auth.register(data).then(setUser);
  // };
  // const logout = async () => {
  //   await auth.logout().then(() => setUser(null));
  // };
  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    />
  );
};
