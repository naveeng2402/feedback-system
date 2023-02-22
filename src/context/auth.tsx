import { createContext, useState } from "react";

import type { FC, ReactNode } from "react";
import type { AuthError, Session, User } from "@supabase/supabase-js";
import { supabase } from "@/supabase";
import { Roles } from "@/types";
import useLocalStorage from "@/hooks/useLocalStorage";

export type IAuth = {
  user: User | null;
  session: Session | null;
  profile?: any;
};

export interface IAuthContext {
  auth: IAuth;
  signUp: (
    email: string,
    password: string
  ) => Promise<AuthError | "/stud/profile">;
  signIn: (
    email: string,
    password: string
  ) => Promise<
    AuthError | "/stud/dashboard" | "/staff/dashboard" | "/admin/dashboard"
  >;
  signOut: () => Promise<AuthError | undefined>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useLocalStorage<IAuth>("auth", {
    user: null,
    session: null,
  });

  const redirect = () => {
    const role: Roles = auth.user?.user_metadata.role;

    switch (role) {
      case "stud":
        return "/stud/dashboard";
      case "staff":
        return "/staff/dashboard";
      case "admin":
        return "/admin/dashboard";
    }
  };

  const signUp = async (email: string, password: string) => {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: { data: { role: "stud" } },
    });
    if (res.error) {
      return res.error;
    }
    setAuth(res.data);

    return "/stud/profile";
  };

  const signIn = async (email: string, password: string) => {
    const res = await supabase.auth.signInWithPassword({ email, password });
    if (res.error) {
      return res.error;
    }
    setAuth(res.data);

    return redirect();
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return error;
    }
    setAuth({ user: null, session: null });
  };

  return (
    <AuthContext.Provider value={{ auth, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
