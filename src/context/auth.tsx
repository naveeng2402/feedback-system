import { createContext, useState } from "react";

import type { FC, ReactNode } from "react";
import type { AuthError, Session, User } from "@supabase/supabase-js";
import { supabase } from "@/supabase";

export type IAuth =
  | {
      user: User | null;
      session: Session | null;
    }
  | {
      user: null;
      session: null;
    };

export interface IAuthContext {
  auth: IAuth;
  signUp: (email: string, password: string) => Promise<AuthError | undefined>;
  signIn: (email: string, password: string) => Promise<AuthError | undefined>;
  signOut: () => Promise<AuthError | undefined>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>({ user: null, session: null });

  const signUp = async (email: string, password: string) => {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: { data: { role: "admin" } },
    });
    if (res.error) {
      return res.error;
    }
    setAuth(res.data);
  };

  const signIn = async (email: string, password: string) => {
    const res = await supabase.auth.signInWithPassword({ email, password });
    if (res.error) {
      return res.error;
    }
    setAuth(res.data);
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
