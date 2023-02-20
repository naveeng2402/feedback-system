import { FC, useState } from "react";

interface Inputprops {
  name: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FC<Inputprops> = ({
  name,
  placeholder,
  type,
  id,
  value,
  setValue,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xl text-blue-800">
        {name}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-blue-100 py-4 px-5  text-blue-900  "
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
    </div>
  );
};

export default Input;
