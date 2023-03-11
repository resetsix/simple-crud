import React from 'react'
import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

export const AuthProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
