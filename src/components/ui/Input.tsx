import { FC } from "react";

interface Inputprops {
  name: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  id: string;
}

const Input: FC<Inputprops> = ({ name, placeholder, type, id }) => {
  return (
    <div>
      <label htmlFor={id} className="pt-9">
        {name}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="rounded-xl border-2 border-blue-100 mt-1 pt-2 w-80 pl-5 pb-2.5"
      ></input>
    </div>
  );
};

export default Input;
