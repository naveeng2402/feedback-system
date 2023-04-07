import { FC, useState } from "react";
import { ReactComponent as Search } from "@icons/Search.svg";
import { BaseDropdown, Button } from "@/components/ui";
import DoughnutChart from "@/components/ui/DoughnutChart";
import {
  Doughnutdata,
  Doughnutoptions,
} from "@/data/_overallReportDoughnut.json";
import { ReactComponent as Green } from "@icons/Green.svg";
import { ReactComponent as LightBlue } from "@icons/LightBlue.svg";
import { ReactComponent as Blue } from "@icons/Blue.svg";
import { ReactComponent as Yellow } from "@icons/Yellow.svg";
import { ReactComponent as Purple } from "@icons/Purple.svg";

interface DetailCard {
  SubjectName: string;
  batch: string;
  Semester: number;
  Section: string;
  Department: string;
}

const indication = [
  {
    id: 1,
    name: "Excellent",
    symbol: <Green />,
  },
  {
    id: 2,
    name: "Very Good",
    symbol: <LightBlue />,
  },
  {
    id: 3,
    name: "Good",
    symbol: <Blue />,
  },
  {
    id: 4,
    name: "Pair",
    symbol: <Yellow />,
  },
  {
    id: 5,
    name: "Purple",
    symbol: <Purple />,
  },
];

const timeline = [{ id: "1", text: "2020-2021" }];

const OverallStaffReport: FC<DetailCard> = ({
  SubjectName,
  batch,
  Semester,
  Section,
  Department,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [timeLine, setTimeline] = useState({ id: "2", text: "Set Timeline" });
  return (
    <div>
      <div className="mx-9 my-6 flex  overflow-hidden rounded-lg border-2 border-gray-300 fill-gray-400 text-gray-500 focus-within:border-blue-800/50 focus-within:fill-blue-800/90 focus-within:text-blue-800">
        <input
          type="text"
          className="w-full border-none border-transparent px-4 py-2 outline-none focus:ring-0 "
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Search className="m-2 h-8 w-8 border-none border-transparent fill-inherit" />
      </div>

      <div className="px-5">
        <p className=" py-2 px-2 text-xl font-semibold text-blue-800">
          Asst. Prof. Mr. Iranya Pandiyan
        </p>
        <div className="px-2">
          <div className="rounded-xl border-2 border-[#B1C1FD] bg-[#E0EDFF] py-5 px-5 ">
            <div className="font-semibold text-[#556085]">
              <p className="text-md">{SubjectName}</p>
            </div>
            <div className=" grid grid-cols-2 gap-y-4 gap-x-3 py-4 px-2 text-sm font-bold text-blue-700">
              <p>Batch: {batch}</p>
              <p>Semester: {Semester}</p>
              <p>Section: {Section}</p>
              <p>Department: {Department}</p>
            </div>
            <Button className="p-2">View Reports</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start ">
        <p className="py-2 px-4 text-lg font-semibold text-blue-800">
          Overall Report
        </p>
        <div className="pl-4 pr-44">
          <BaseDropdown
            label=""
            options={timeline}
            value={timeLine}
            setValue={setTimeline}
          />
        </div>
      </div>
      <div className=" mt-[-3rem] grid grid-cols-2 place-items-center gap-8  px-14">
        <div className="">
          <DoughnutChart data={Doughnutdata} options={Doughnutoptions} />
        </div>
        <div>
          {indication.map((indicate) => {
            return (
              <div
                className="flex items-center gap-3 font-semibold text-blue-800"
                key={indicate.id}
              >
                {indicate.symbol}
                <p>{indicate.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-0">
        <div className="flex flex-col justify-start py-4">
          <p className="py-2 px-4 text-lg font-semibold text-blue-800">
            Overall Report
          </p>
          <div className="pl-4 pr-44">
            <BaseDropdown
              label=""
              options={timeline}
              value={timeLine}
              setValue={setTimeline}
            />
          </div>
        </div>
      </div>

      <div className=" mt-[-5rem] grid grid-cols-2 place-items-center gap-8  px-14">
        <div className="">
          <DoughnutChart data={Doughnutdata} options={Doughnutoptions} />
        </div>
        <div>
          {indication.map((indicate) => {
            return (
              <div
                className="flex items-center gap-3 font-semibold text-blue-800"
                key={indicate.id}
              >
                {indicate.symbol}
                <p>{indicate.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverallStaffReport;
