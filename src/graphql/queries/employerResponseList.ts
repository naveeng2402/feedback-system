import strftime from "@/strftime";
import { supabase } from "@/supabase";
import { ResponseListQueryResult } from "@/types";
import { useEffect, useState } from "react";

export const useEmployerResponseQuery = (
  fromYear: number,
  toYear: number,
  id?: string | number
) => {
  const [data, setData] = useState<ResponseListQueryResult[]>([]);
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
        // @ts-ignore
        const dataNorm: ResponseListQueryResult[] = res.data.map((val) => ({
          id: val.id,
          title: val.employer_name,
          subtitle: val.company,
          avg_answer: val.avg_answer,
          created_at: getDate(val.created_at),
        }));

        setData(dataNorm);
      });
  }, [fromYear, toYear, id]);

  return data;
};

export const useEmployerResponseYearOptionsQuery = (id?: string | number) => {
  const [years, setYears] = useState<
    {
      id: string;
      text: string;
    }[]
  >([]);
  useEffect(() => {
    supabase.rpc("get_employer_response_year_options_function").then((res) => {
      if (res.error) {
        alert(res.error.message);
        return;
      }
      // @ts-ignore
      const dataNorm = res.data.map((year) => ({ id: year, text: year }));

      setYears(dataNorm);
    });
  }, [id]);

  return years;
};
