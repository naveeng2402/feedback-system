import { BaseDropdown, Button, Input } from "@ui/index";
import { ReactComponent as Plus } from "@icons/Plus.svg";
import { deptOptionsQuery } from "@/graphql/queries/deptOptions";
import { Dialog } from "@headlessui/react";
import { FC, useMemo, useState } from "react";
import { useQuery } from "urql";
import { useStaffListQuery } from "@/graphql/queries/staffList";
import { type AdminUserAttributes, createClient } from "@supabase/supabase-js";

interface CreateStaffModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateStaffModal: FC<CreateStaffModalProps> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [staffNo, setStaffNo] = useState("");
  const [name, setName] = useState("");

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

  const designationOptions = [
    { id: "AP", text: "Assistant Professor" },
    { id: "P", text: "Professor" },
    { id: "HOD", text: "Head Of the Department" },
  ];

  const [stream, setStream] = useState(streams[0]);
  const [designation, setDesignation] = useState(designationOptions[0]);

  const createStaff = async () => {
    const adminClient = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_SERVICE_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    const { data, error } = await adminClient.auth.admin.createUser({
      email,
      password: pass,
      user_metadata: {
        role: "staff",
        name,
        staff_no: staffNo,
        dept_id: stream.id,
        designation: designation.id,
      },
      email_confirm: true,
    });

    error && window.alert(error.message);

    if (error === null) {
      setEmail("");
      setName("");
      setDesignation(designationOptions[0]);
      setPass("");
      setStaffNo("");
    }
  };

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0">
      <Dialog.Overlay className="fixed inset-0 bg-gray-700/80" />
      <Dialog.Panel className="absolute inset-8 top-1/2 h-fit -translate-y-1/2 space-y-8 rounded-3xl bg-white p-4 text-gray-50 ">
        <h2 className="text-3xl text-blue-800">Add Staff</h2>

        <div className="space-y-2 px-4">
          <Input
            value={name}
            setValue={setName}
            name="Name"
            placeholder="name"
            id="text"
            type="text"
          />
          <Input
            value={email}
            setValue={setEmail}
            name="Email"
            placeholder="email"
            id="email"
            type="email"
          />
          <BaseDropdown
            label="Designation"
            options={designationOptions}
            value={designation}
            setValue={setDesignation}
          />
          <BaseDropdown
            label="Stream"
            options={streams}
            value={stream}
            setValue={setStream}
          />
          <Input
            value={pass}
            setValue={setPass}
            name="Password"
            placeholder="pass"
            id="pass"
            type="password"
          />
          <Input
            value={staffNo}
            setValue={setStaffNo}
            name="Staff No."
            placeholder="staff no"
            id="staff_no"
            type="text"
          />
        </div>

        <div className="mt-auto mb-4 flex w-full gap-4 px-2">
          <Button
            onClick={() => setIsOpen(false)}
            className="w-full"
            intent="inactive"
          >
            Close
          </Button>
          <Button
            onClick={() => {
              createStaff();
            }}
            className="w-full"
          >
            Create
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

const StaffManagement = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    data: staffListData,
    error: staffListErr,
    loading,
  } = useStaffListQuery();

  return (
    <div className="w-full">
      <div className="fixed bottom-0 right-0 my-24 mx-12">
        <Button size="circle" onClick={() => setModalOpen(true)}>
          <Plus className="m-6 h-8 w-8" />
        </Button>
      </div>

      <main>
        {staffListData?.map((val) => (
          <p>{JSON.stringify(val)}</p>
        ))}
      </main>

      <CreateStaffModal isOpen={modalOpen} setIsOpen={setModalOpen} />
    </div>
  );
};

export default StaffManagement;
