import { FC, useState } from "react";

interface Inputprops {
  name: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  Class: string;
}

const Input: FC<Inputprops> = ({
  name,
  placeholder,
  type,
  id,
  value,
  setValue,
  Class,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={Class}>
        {name}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="rounded-xl border-2 w-full border-blue-100 mt-1 py-2  pl-5  "
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
    </div>
  );
};

export default Input;
