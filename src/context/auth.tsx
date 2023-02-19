import { createContext, useState } from "react";

import type { FC, ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";

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
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>({ user: null, session: null });

  const signIn = (email: string, password: string) => {
    alert(`SignIn\nEmail: ${email}\nPass:${password}`);
  };
  const signOut = () => {
    alert("SignOut");
  };

  return (
    <AuthContext.Provider value={{ auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
