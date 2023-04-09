import { supabase } from "@/supabase";
import { useEffect, useState } from "react";

interface IGetStudentResponseData {
  question_no: number;
  question: string;
  average: number;
}

export const useGetStudentReportData = (feedbackId: number) => {
  const [data, setData] = useState<IGetStudentResponseData[]>();
  useEffect(() => {
    supabase
      .rpc("generate_student_report", { _feedback_id: feedbackId })
      .then((res) => {
        if (res.error) {
          alert(res.error.message);
          return;
        }

        setData(res.data);
      });
  }, []);

  //   alert(JSON.stringify({ data, avgValues: data?.map((item) => item.average) }));

  return data
    ? { data, avgValues: data?.map((item) => item.average) }
    : { data: undefined, argValues: undefined };
};
