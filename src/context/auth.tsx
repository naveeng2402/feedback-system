import { createContext, useState } from "react";

import type { FC, ReactNode } from "react";
import type { AuthError, Session, User } from "@supabase/supabase-js";
import { supabase } from "@/supabase";
import { Roles } from "@/types";
import useLocalStorage from "@/hooks/useLocalStorage";

type IProfile = {
  batch: number | null;
  dept_id: number | null;
  id: string;
  isNewUser: boolean;
  section: string | null;
  name: string | null;
  roll_no: number | null;
  updated_at: string | null;
};
export type IAuth = {
  user: User | null;
  session: Session | null;
  profile?: IProfile | null;
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
    profile: null,
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
      alert(res.error.message);
      return res.error;
    }
    const profile = await supabase
      .from("student_profile")
      .select("*")
      .eq("id", res.data.user?.id)
      .single();
    setAuth({ ...res.data, profile: profile.data });

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
