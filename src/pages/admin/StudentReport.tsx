import BarChart from "@/components/ui/BarChart";
import FeedbackDetails from "@/components/ui/FeedbackDetails";
import HorizontalBarChart from "@/components/ui/HorizontalBarChart";
import { useGetStudentReportData } from "@/graphql/queries/getStudentReportData";
import { useGetStudentReportQuery } from "@/graphql/queries/getStudentReportQuery";
import { FC } from "react";
import { useParams } from "react-router-dom";

const StudentReport: FC = () => {
  const { feedbackId } = useParams();

  const _feedbackId = parseInt(feedbackId!);

  const { data: details } = useGetStudentReportQuery(_feedbackId);
  const { data: reportData, avgValues } = useGetStudentReportData(_feedbackId);

  return details && reportData ? (
    <>
      {/* <header className="flex items-center justify-between gap-6  px-4 py-9  font-semibold">
        <Button>
          <p>Print</p>
          <Print />
        </Button>
      </header> */}
      <main className="mb-8 space-y-4 px-4">
        <FeedbackDetails
          Department={details.department}
          ProfessorName={`${details.staff.name} (${details.staff.department})`}
          Section={details.section}
          Semester={details.semester}
          SubjectName={`${details.subject.name} (${details.subject.subCode})`}
          batch={details.batch.toFixed()}
        />
        <BarChart data={avgValues} />
        <p className="px-3 text-2xl font-semibold text-blue-800">
          Detailed Report
        </p>
        <div className="flex flex-col gap-2 px-2">
          {reportData.map((ques) => {
            return (
              <div
                key={ques.question_no}
                className="flex items-center justify-between overflow-auto rounded-md bg-blue-100 px-4 py-3"
              >
                <p className="font-semibold text-blue-800">
                  {ques.question_no} {ques.question}
                </p>
                <div className="max-w-[10rem]">
                  <HorizontalBarChart data={[ques.average]} />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  ) : (
    <div>Loading..</div>
  );
};

export default StudentReport;
