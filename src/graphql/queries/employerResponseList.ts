import strftime from "@/strftime";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";

export const useEmployerResponseQuery = (fromYear: number, toYear: number) => {
  const [data, setData] = useState<
    {
      id: number;
      employer_name: string;
      company: string;
      created_at: string;
      avg_answer: number;
    }[]
  >();
  const getDate = (timestamp: string) =>
    strftime("%d-%m-%Y", new Date(timestamp));

  useEffect(() => {
    supabase
      .rpc("get_employer_response_list", {
        from_year: fromYear,
        to_year: toYear,
      })
      .then((res) => {
        if (res.error) {
          alert(res.error.message);
          return;
        }
        const dataNorm = res.data.map((val) => ({
          ...val,
          created_at: getDate(val.created_at),
        }));

        setData(dataNorm);
      });
  }, [fromYear, toYear]);

  return data;
};
