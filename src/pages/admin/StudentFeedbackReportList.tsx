import { BaseDropdown, Button } from "@/components/ui";
import FilterModal from "@/components/ui/FilterModal";
import { useDeptsQuery } from "@/graphql/queries/deptOptions";
import { useGetStudentFeedbackBatch } from "@/graphql/queries/getStudentFeedbackBatch";
import { useManageFeedbackList } from "@/graphql/queries/manageFeedbackList";
import { supabase } from "@/supabase";
import { Dialog } from "@headlessui/react";
import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface IFeedbackDetailsResult {
  data: {
    id: number;
    staff: {
      name: string;
      department: string;
    };
    subject: {
      code: string;
      name: string;
      short_name: string;
    };
  }[];
  response: {
    count: number;
    feedback_id: number;
  }[];
}
interface IFeedbackDetails {
  responseCount: number | undefined;
  id: number;
  staff: {
    name: string;
    department: string;
  };
  subject: {
    code: string;
    name: string;
    short_name: string;
  };
}

interface ReportListItemProps {
  title?: string;
  subtitle?: string;
  onClick: () => void;
}
const ReportListItem: FC<ReportListItemProps> = ({
  title,
  subtitle,
  onClick,
}) => (
  <button
    className="w-full space-y-1 rounded-md border-2 border-[#B1C1FD] bg-[#E0EDFF]/50 p-4 text-left  text-[#556085] shadow transition-all hover:scale-[101%] hover:bg-[#E0EDFF] hover:shadow-md"
    onClick={onClick}
  >
    <h3 className="grow text-lg font-semibold">{title}</h3>
    <p className="grow ">semester : {subtitle}</p>
  </button>
);

interface DetailsModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const DetailsModal: FC<DetailsModalProps> = ({
  isOpen,
  setIsOpen,
  children,
}) => {
  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0">
      <Dialog.Overlay className="fixed inset-0 bg-gray-700/80" />
      <Dialog.Panel className="absolute inset-8 mx-auto my-auto h-fit max-w-xl space-y-8 rounded-3xl bg-white p-4 text-blue-800">
        <h2 className="text-center text-3xl font-semibold">Feedback Details</h2>
        <div className="max-h-[60vh] space-y-1 overflow-scroll">{children}</div>
        <div className="flex w-full gap-4 px-2">
          <Button
            onClick={() => setIsOpen(false)}
            className="w-full"
            intent="inactive"
          >
            Close
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

const StudentFeedbackReportList: FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  const batchOptions = useGetStudentFeedbackBatch({});
  const { data: _deptsOptions } = useDeptsQuery();
  const [deptOptions, setDeptOptions] = useState(_deptsOptions);
  useEffect(() => {
    if (_deptsOptions.length > 1) {
      setDeptOptions([{ id: "", text: "---" }, ..._deptsOptions]);
    }
  }, [_deptsOptions]);

  const [batch, setBatch] = useState(batchOptions[0]);
  const [dept, setDept] = useState(deptOptions[0]);
  const [params, setParams] = useState({});

  const { data: response } = useManageFeedbackList(false, params);

  const onModalApply = () => {};

  const [selectedFeedbackId, setSelectedFeedbackId] = useState<number>();
  const [selectedFeedback, setSelectedFeedback] =
    useState<IFeedbackDetails[]>();

  useEffect(() => {
    setSelectedFeedback(undefined);
    selectedFeedbackId &&
      supabase
        .rpc("get_feedback_status", { _feedback_id: selectedFeedbackId })
        .then((res) => {
          // @ts-ignore
          const { data: _data, response: _response }: IFeedbackDetailsResult =
            res.data;
          const details = _data.map((item) => ({
            ...item,
            responseCount:
              _response.find((resItem) => resItem.feedback_id === item.id)
                ?.count || 0,
          }));

          setSelectedFeedback(details);
          setIsDetailsOpen(true);
        });
  }, [selectedFeedbackId]);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <>
      <div className="my-2 w-full">
        <Button
          onClick={() => setFilterOpen(true)}
          intent="inactive"
          className="mx-4 ml-auto block p-2"
        >
          Filter
        </Button>
      </div>

      <main className="mx-4 my-4 space-y-4">
        {response ? (
          response.length === 0 ? (
            <>No items found</>
          ) : (
            <>
              {response.map((resp) => (
                <ReportListItem
                  title={`${resp.department} - ${resp.batch}`}
                  subtitle={resp.sem.toString()}
                  onClick={() => {
                    setSelectedFeedbackId(parseInt(resp.id));
                  }}
                />
              ))}
            </>
          )
        ) : (
          <p>Loading...</p>
        )}
      </main>

      <FilterModal
        isOpen={filterOpen}
        setIsOpen={setFilterOpen}
        onApply={onModalApply}
      >
        <div className="space-y-2">
          <BaseDropdown
            label="Batch"
            value={batch}
            setValue={setBatch}
            options={batchOptions}
          />
          <BaseDropdown
            label="Department"
            value={dept}
            setValue={setDept}
            options={deptOptions}
          />
        </div>
      </FilterModal>

      <DetailsModal isOpen={isDetailsOpen} setIsOpen={setIsDetailsOpen}>
        {selectedFeedback &&
          selectedFeedback.map((item) => (
            <NavLink
              to={`/admin/student-report/${item.id}`}
              key={item.id}
              className="flex w-full items-center justify-between gap-2 rounded border-2 border-[#B1C1FD] bg-[#E0EDFF] p-4 text-start text-[#556085]"
            >
              <div className="max-w-[90%]">
                <p className="text-lg font-semibold">
                  {`${item.subject.short_name || item.subject.name} (${
                    item.subject.code
                  })`}
                </p>
                <p className="text-sm">{`${item.staff.name} (${item.staff.department})`}</p>
              </div>
              <p className="w-[10%] text-center text-xl font-bold ">
                {item.responseCount}
              </p>
            </NavLink>
          ))}
      </DetailsModal>
    </>
  );
};

export default StudentFeedbackReportList;
