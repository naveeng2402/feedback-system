import { AuthContext, IAuthContext } from "@/context/auth";
import { deptOptionsQuery } from "@/graphql/queries/deptOptions";
import { supabase } from "@/supabase";
import { BaseDropdown, Button, Input } from "@ui/index";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "urql";

const StudentProfile = () => {
  const { auth } = useContext(AuthContext) as IAuthContext;

  const [res, reExecuteQuery] = useQuery({ query: deptOptionsQuery });
  const { fetching, error, data: streamsRes } = res;
  const streams = useMemo(() => {
    return streamsRes?.departmentsCollection
      ? streamsRes.departmentsCollection.edges.map((val) => ({
          id: val.node.id as string,
          text: val.node.short_name,
        }))
      : [{ id: "", text: "Select Dept" }];
  }, [streamsRes]);

  const [name, setName] = useState("");
  const [roll_no, setRegNo] = useState("");
  const [batch, setBatch] = useState("2023");
  const [stream, setStream] = useState(streams[0]);

  const navigate = useNavigate();

  const setProfile = async () => {
    const { count, error, data } = await supabase
      .from("student_profile")
      .update({
        batch: parseInt(batch),
        roll_no,
        name,
        dept_id: stream.id,
        isNewUser: true,
      })
      .eq("id", auth.user?.id)
      .select();
    navigate("/stud/dashboard");
  };

  return (
    <div className="my-2 mx-auto max-w-sm space-y-8">
      <header className="flex flex-col gap-4">
        <h1 className="my-2 text-center text-4xl font-semibold text-blue-700">
          Student Profile Setup
        </h1>
      </header>
      <main className="space-y-4">
        <Input
          id="name"
          value={name}
          setValue={setName}
          name="Name"
          placeholder=""
          type="text"
        />
        <Input
          id="reg_no"
          value={roll_no}
          setValue={setRegNo}
          name="Register Number"
          placeholder="1108..."
          type="text"
        />
        <Input
          id="batch"
          value={batch}
          setValue={setBatch}
          name="Batch"
          placeholder="2023"
          type="number"
        />
        <BaseDropdown
          label="Stream"
          options={streams}
          value={stream}
          setValue={setStream}
        />
      </main>
      <Button className="mx-auto" onClick={setProfile}>
        Save Profile
      </Button>
    </div>
  );
};

export default StudentProfile;
