import { FC } from "react";
import { ReactComponent as LeftArrow } from "@icons/LeftArrow.svg";
import Button from "@ui/Button";
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
  const { feedbackId } = { feedbackId: 1 };
  const details = {
    staff: { name: "Iraniya Pandiyan", department: "CSE" },
    subject: {
      name: "Object Oriented Programming Laboratory",
      subCode: "CS8603",
    },
    batch: 2024,
    semester: 6,
    section: "A",
    department: "CSE",
  };

  return (
    <>
      <header className="flex items-center justify-between gap-6  px-4 py-9  font-semibold">
        <button className="p-2">
          <LeftArrow />
        </button>
        <Button>
          <p>Print</p>
          <Print />
        </Button>
      </header>
      <main className="mb-8 space-y-4 px-4">
        <FeedbackDetails
          Department={details.department}
          ProfessorName={`${details.staff.name} (${details.staff.department})`}
          Section={details.section}
          Semester={details.semester}
          SubjectName={`${details.subject.name} (${details.subject.subCode})`}
          batch={details.batch.toFixed()}
        />
        <BarChart data={data} />
        <p className="px-3 text-2xl font-semibold text-blue-800">
          Detailed Report
        </p>
        <div className="flex  flex-col gap-2 px-2">
          {questions.map((ques) => {
            return (
              <div
                key={ques.id}
                className="flex  items-center rounded-md bg-blue-100 px-4 py-3"
              >
                <p className="font-semibold text-blue-800">{ques.question}</p>
                <div className="max-w-[10rem]">
                  <HorizontalBarChart data={Horizontaldata} />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default StaffReport;
