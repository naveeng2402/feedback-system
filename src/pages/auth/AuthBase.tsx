import { Outlet, useLocation } from "react-router-dom";
import { ReactComponent as SignInIllustration } from "@/assets/illustrations/SignIn.svg";
import { ReactComponent as SignUpIllustration } from "@/assets/illustrations/SignUp.svg";
import { useContext } from "react";
import { AuthContext, IAuthContext } from "@/context/auth";

const AuthBase = () => {
  const location = useLocation();
  const { signOut } = useContext(AuthContext) as IAuthContext;
  const Illustration =
    location.pathname === "/auth/sign-in"
      ? SignInIllustration
      : SignUpIllustration;

  return (
    <div>
      <div className="flex  min-h-[96vh] flex-col items-center justify-center gap-4 p-2 ">
        <header className="space-y-4 text-center text-2xl text-blue-800">
          <h1 className="text-4xl font-semibold text-blue-800">
            Jaya Engineering College
          </h1>
          <h2 className="font-semibold">Feedback System</h2>
        </header>
        <Illustration className="max-h-[40vh] w-3/4" />
        <main className="w-full px-4">
          <Outlet />
        </main>
      </div>
      <footer className="m-2 text-sm text-blue-800">
        2023 JEC All Rights Reserved{" "}
        <span
          onClick={() => {
            signOut();
          }}
        >
          signOut
        </span>
      </footer>
    </div>
  );
};

export default AuthBase;
