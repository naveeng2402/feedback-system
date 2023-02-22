import { AuthContext, type IAuthContext } from "@/context/auth";
import { Button, Input } from "@ui/index";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const { signUp } = useContext(AuthContext) as IAuthContext;
  const navigate = useNavigate();

  const signUpHandler = () => {
    if (!email.endsWith("@jec.ac.in")) {
      alert("Emails can only be within jec.ac.in");
      return;
    }

    if (pass != confirmPass) {
      alert("passwords did not match");
      return;
    }

    signUp(email, pass)
      .then((res) => {
        if (typeof res === "string") navigate(res);
      })
      .catch((err) => alert(JSON.stringify(err)));
  };

  return (
    <div className="my-2 mx-auto max-w-sm space-y-8">
      <div className="flex flex-col gap-4">
        <h4 className="my-2 text-center text-4xl font-semibold text-blue-700">
          Student Sign Up
        </h4>
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
        />{" "}
        <Input
          name="Confirm Password"
          id="c_pass"
          type="password"
          placeholder=""
          value={confirmPass}
          setValue={setConfirmPass}
        />
      </div>
      <div className="space-y-2">
        <Button
          onClick={signUpHandler}
          size="medium"
          className="mx-auto w-full px-8 py-4"
        >
          Sign Up
        </Button>
        <p className="text-center text-sm">
          Already have a account?{" "}
          <NavLink className="text-blue-700" to="/auth/sign-in">
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
