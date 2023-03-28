import strftime from "@/strftime";
import { supabase } from "@/supabase";
import { ResponseListQueryResult } from "@/types";
import { useEffect, useState } from "react";

export const useAlumniResponseQuery = (
  fromYear: number,
  toYear: number,
  id?: string | number
) => {
  const [data, setData] = useState<ResponseListQueryResult[]>([]);
  const getDate = (timestamp: string) =>
    strftime("%d-%m-%Y", new Date(timestamp));

  useEffect(() => {
    supabase
      .rpc("get_alumni_response_list", {
        from_year: fromYear,
        to_year: toYear,
      })
      .then((res) => {
        if (res.error) {
          alert(res.error.message);
          return;
        }
        const dataNorm: ResponseListQueryResult[] = res.data.map((val) => ({
          id: val.id,
          title: val.alumni_name,
          subtitle: `${val.dept} ${val.batch}`,
          avg_answer: val.avg_answer,
          created_at: getDate(val.created_at),
        }));

        setData(dataNorm);
      });
  }, [fromYear, toYear, id]);

  return data;
};

export const useAlumniResponseYearOptionsQuery = (id?: string | number) => {
  const [years, setYears] = useState<
    {
      id: string;
      text: string;
    }[]
  >([]);
  useEffect(() => {
    supabase.rpc("get_alumni_response_year_options_function").then((res) => {
      if (res.error) {
        alert(res.error.message);
        return;
      }
      const dataNorm = res.data.map((year) => ({ id: year, text: year }));

      setYears(dataNorm);
    });
  }, [id]);

  return years;
};
