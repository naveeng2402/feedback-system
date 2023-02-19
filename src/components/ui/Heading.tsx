import { FC } from "react";
interface HeadingProps {
  name: string;
}

const Heading: FC<HeadingProps> = ({ name }) => {
  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold mx-auto max-w-[80%] py-2">
        {name}
      </h1>
    </div>
  );
};

export default Heading;
