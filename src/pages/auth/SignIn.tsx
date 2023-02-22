import { NavLink, useNavigate } from "react-router-dom";
import { Button, Input } from "@ui/index";
import { useContext, useState } from "react";
import { AuthContext, IAuthContext } from "@/context/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { auth, signIn } = useContext(AuthContext) as IAuthContext;
  const navigate = useNavigate();

  const signInHandler = () => {
    signIn(email, pass)
      .then((res) => {
        navigate(res as string);
      })
      .catch((err) => {
        alert("Catch" + JSON.stringify(err));
      });
  };

  return (
    <div className="my-2 mx-auto max-w-sm space-y-12">
      <div className="space-y-4">
        <Input
          name="Email"
          id="email"
          type="email"
          placeholder=""
          value={email}
          setValue={setEmail}
        />
        <Input
          name="Password"
          id="pass"
          type="password"
          placeholder=""
          value={pass}
          setValue={setPass}
        />
      </div>
      <div className="space-y-2">
        <Button
          onClick={signInHandler}
          size="medium"
          className="mx-auto w-full px-8 py-4"
        >
          Sign In
        </Button>
        <p className="text-center text-sm">
          Need a Student account?{" "}
          <NavLink className="text-blue-700" to="/auth/sign-up">
            Sign Up.
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
