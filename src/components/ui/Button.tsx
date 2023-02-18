import { FC } from "react";

interface ButtonProps {
  content: string;
  clickAction: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ content, clickAction }) => {
  return (
    <button
      type="submit"
      className="bg-blue-700  px-12 py-2 text-center text-white rounded-md"
      onClick={clickAction}
    >
      {content}
    </button>
  );
};

export default Button;
