import { Outlet, useLocation } from "react-router-dom";
import { ReactComponent as SignInIllustration } from "@/assets/illustrations/SignIn.svg";
import { ReactComponent as SignUpIllustration } from "@/assets/illustrations/SignUp.svg";

const AuthBase = () => {
  const location = useLocation();
  const Illustration =
    location.pathname === "/auth/sign-in"
      ? SignInIllustration
      : SignUpIllustration;

  return (
    <div>
      Auth Base <Outlet />
    </div>
  );
};

export default AuthBase;
