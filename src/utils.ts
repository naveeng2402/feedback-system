import { supabase } from "./supabase";

export const signUpAdmin = async (email: string, password: string) => {
  const res = await supabase.auth.signUp({
    email,
    password,
    options: { data: { role: "admin" } },
  });
  if (res.error) {
    return res.error;
  }

  supabase.auth.signOut();
};
