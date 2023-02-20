import { Outlet, useNavigate } from "react-router-dom";
import { Button, Input } from "@ui/index";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return <div>Sign In</div>;
};

export default SignIn;
