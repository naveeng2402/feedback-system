import { supabase } from "@/supabase";
import { FC } from "react";
import { useParams } from "react-router-dom";

const ResponseListItem: FC = () => (
  <div>
    <h3>Title</h3>
  </div>
);

const ResponseList: FC = () => {
  const { response } = useParams();

  return (
    <main className="mx-4">
      <ResponseListItem />
    </main>
  );
};

export default ResponseList;
