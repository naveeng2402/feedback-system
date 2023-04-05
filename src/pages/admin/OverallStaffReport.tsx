import { FC, useState } from "react";
import { ReactComponent as Search } from "@icons/Search.svg";

const OverallStaffReport: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <div className="mx-4 my-8 flex overflow-hidden rounded-lg border-2 border-gray-300 fill-gray-400 text-gray-500 focus-within:border-blue-800/50 focus-within:fill-blue-800/90 focus-within:text-blue-800">
        <input
          type="text"
          className="w-full border-none border-transparent px-4 py-2 outline-none focus:ring-0 "
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Search className="m-2 h-8 w-8 border-none border-transparent fill-inherit" />
      </div>
    </div>
  );
};

export default OverallStaffReport;
