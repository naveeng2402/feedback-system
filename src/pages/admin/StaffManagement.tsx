import { BaseDropdown, Button, Input } from "@ui/index";
import { deptOptionsQuery } from "@/graphql/queries/deptOptions";
import { Dialog } from "@headlessui/react";
import { FC, useMemo, useState } from "react";
import { useQuery } from "urql";
import { useStaffListQuery } from "@/graphql/queries/staffList";

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

  const [stream, setStream] = useState(streams[0]);

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0">
      <Dialog.Overlay className="fixed inset-0 bg-gray-700/80" />
      <Dialog.Panel className="absolute inset-8 top-1/2 h-fit -translate-y-1/2 space-y-8 rounded-3xl bg-white p-4 text-gray-50 sm:w-fit">
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
          <Button className="w-full">Apply</Button>
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
      <div className="mx-4">
        <Button onClick={() => setModalOpen(true)} className="ml-auto">
          Add Staff
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
