import { useManageFeedbackList } from "@/graphql/queries/manageFeedbackList";
import { FC, ReactNode, useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { FeedbackDataItem } from "../stud/Feedback";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui";
import { supabase } from "@/supabase";
import { Json } from "@/supabase_types";

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

interface DetailsModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  onApply: () => void;
}

const DetailsModal: FC<DetailsModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  onApply,
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
          <Button className="w-full" onClick={onApply}>
            Conceal
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

const ManageFeedbackList: FC = () => {
  const { data: feedbackList, reExecuteQuery } = useManageFeedbackList();
  const navigate = useNavigate();

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
  const handleConcealFeedback = async () => {
    const { data, error } = await supabase
      .from("feedback")
      .update({ is_published: false })
      .eq("id", selectedFeedbackId);
    reExecuteQuery();
    setIsDetailsOpen(false);
  };

  return (
    <main className="mx-4 space-y-4">
      {feedbackList?.map((item) => (
        <button
          key={item.id}
          className="w-full rounded border-2 border-[#B1C1FD] bg-[#E0EDFF] p-4 text-start"
          onClick={() => {
            setSelectedFeedbackId(parseInt(item.id));
          }}
        >
          <h2 className="text-lg font-bold text-[#556085]">{`${item.department} - ${item.batch}`}</h2>
          <p>{item.id}</p>
          <FeedbackDataItem prompt="Semester" value={item.sem} />
          <FeedbackDataItem prompt="Created Date" value={item.created_at} />
        </button>
      ))}
      <DetailsModal
        isOpen={isDetailsOpen}
        setIsOpen={setIsDetailsOpen}
        onApply={handleConcealFeedback}
      >
        {selectedFeedback &&
          selectedFeedback.map((item) => (
            <div
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
            </div>
          ))}
      </DetailsModal>
    </main>
  );
};

export default ManageFeedbackList;
