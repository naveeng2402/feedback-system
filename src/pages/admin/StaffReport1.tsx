import { FC, useState } from "react";
import { ReactComponent as LeftArrow } from "@icons/LeftArrow.svg";
import Button from "@ui/Button";
import { BaseDropdown } from "@/components/ui";
import { ReactComponent as Print } from "@icons/Print.svg";
import FeedbackDetails from "@/components/ui/FeedbackDetails";
import BarChart from "@/components/ui/BarChart";
import { ReactComponent as Star } from "@icons/star.svg";
import HorizontalBarChart from "@/components/ui/HorizontalBarChart";
import questions from "@/data/_staffQuestions.json";
import { data, options } from "@/data/_staffReportBarChart.json";
import {
  Horizontaldata,
  Horizontaloptions,
} from "@/data/_staffReportHorizontalBar.json";

const StaffReport: FC = () => {
  const rating = [
    {
      id: 1,
      rate: 1,
    },
    {
      id: 2,
      rate: 2,
    },
    {
      id: 3,
      rate: 3,
    },
    {
      id: 4,
      rate: 4,
    },
    {
      id: 5,
      rate: 5,
    },
  ];
  const [timeLine, setTimeline] = useState({ id: "2", text: "Set Timeline" });
  const timeline = [{ id: "1", text: "2020-2021" }];
  return (
    <div>
      <div className="flex items-center justify-around gap-6  px-4 py-9  font-semibold">
        <div className="flex  items-center justify-center gap-6">
          <LeftArrow />
          <p className="text-4xl text-blue-900">Staff Report</p>
        </div>
        <Button>
          <p>Print</p>
          <Print />
        </Button>
      </div>
      <div className="py-4 px-4 text-xl font-semibold text-blue-700">
        <p>Overall Report</p>
      </div>
      <div className="px-4">
        <FeedbackDetails
          Department="CSE"
          ProfessorName="Prof. Mr.Iraniya Pandiyan"
          Section="--"
          Semester={6}
          SubjectName="Object Oriented Programming Laboratory (CS8603)"
          batch="2020-2024"
          yearButton="Mar 2022"
        />
      </div>
      <div className="py-3 pl-4 pr-44">
        <BaseDropdown
          label=""
          options={timeline}
          value={timeLine}
          setValue={setTimeline}
        />
      </div>
      <div className="w-full py-4 px-4">
        <BarChart data={data} options={options} />
      </div>
      <div>
        <p className="px-3 text-2xl font-semibold text-blue-800">
          Detailed Report
        </p>
        <div className="flex items-center justify-end gap-3 py-2 px-3">
          {rating.map((rate) => {
            return (
              <div className="flex items-center gap-1" key={rate.id}>
                <p>{rate.rate}</p>
                <Star />
              </div>
            );
          })}
        </div>

        <div className="flex  flex-col gap-2 px-2">
          {questions.map((ques) => {
            return (
              <div
                key={ques.id}
                className="flex  items-center rounded-md bg-blue-100 px-4 py-3"
              >
                <p className="font-semibold text-blue-800">{ques.question}</p>
                <div className="max-w-[10rem]">
                  <HorizontalBarChart
                    data={Horizontaldata}
                    options={Horizontaloptions}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StaffReport;
