import { Button, Input } from "@ui/index";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const signUp = () => {
    alert(`Email: ${email}\nPass: ${pass}\nConfirm:${confirmPass}`);
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
          onClick={signUp}
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
