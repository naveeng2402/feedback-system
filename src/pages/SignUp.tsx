import { FC, useState } from "react";
import Input from "@ui/Input";
import Heading from "@ui/Heading";
import SignUpimg from "@/assets/SignUp.jpg";
import Button from "@ui/Button.jsx";
const SignUp: FC = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  function signUphandler() {
    console.log("clicked");
  }

  return (
    <div className="m-2">
      <Heading name="Jaya Engineering College" />
      <img
        src={SignUpimg}
        alt="SignUp"
        className="max-h-80 mx-auto mt-2 mix-blend-multiply"
      />
      <div className="w-80 mx-auto">
        <Input
          id="1"
          type="text"
          name="Enter Username"
          placeholder="Enter Username"
          setValue={setUsername}
          value={Username}
          Class=""
        />
        <div className="py-6 ">
          <Input
            id="2"
            type="text"
            name="Enter Password"
            placeholder="Enter Password"
            setValue={setPassword}
            value={Password}
            Class=""
          />
        </div>
      </div>
      <div className="grid place-items-center my-6">
        <Button content="Sign In" clickAction={signUphandler} />
      </div>
    </div>
  );
};

export default SignUp;
