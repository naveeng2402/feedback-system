import { FC } from "react";

interface Inputprops {
  name: string;
  placeholder: string;
}

const Input: FC<Inputprops> = ({ name, placeholder }) => {
  return (
    <div className="ml-8">
      <h1 className="pt-9">{name}</h1>
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-xl   border-2 border-blue-100 mt-1 pt-2 w-80 placeholder:pl-5 pb-2.5"
      ></input>
    </div>
  );
};

export default Input;
