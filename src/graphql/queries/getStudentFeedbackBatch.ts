import { supabase } from "@/supabase";
import { useEffect, useState } from "react";

interface IGetStudentFeedbackBatch {
  dept_id?: number;
}
export const useGetStudentFeedbackBatch = ({
  dept_id,
}: IGetStudentFeedbackBatch) => {
  const [batches, setBatches] = useState([{ id: "", text: "Select Batch" }]);
  useEffect(() => {
    let vars = {};
    if (dept_id) {
      vars = { dept_id };
    }

    supabase.rpc("get_student_feedback_batch_list", {}).then((res) => {
      if (res.error) {
        console.error(res.error);
        return;
      }
      const data = (res.data as string[]).map((item) => ({
        id: item,
        text: item,
      }));
      setBatches([{ id: "", text: "----" }, ...data]);
    });
  }, [dept_id]);

  return batches;
};
