import { FC } from "react";
import { ReactComponent as LeftArrow } from "@icons/LeftArrow.svg";
import { ReactComponent as Faculty } from "@icons/Faculty.svg";
import { ReactComponent as Infrastructure } from "@icons/Infrastructure.svg";
import { ReactComponent as StudentLab } from "@icons/StudentLab.svg";
import { ReactComponent as StudentCourse } from "@icons/StudentCourse.svg";
import { ReactComponent as Alumni } from "@icons/Alumni.svg";

const AdminReports: FC = ({}) => {
  const data = [
    {
      icon: <Alumni />,
      Heading: "Alumini Reports",
      description: "View a list od their completed feedbacks",
    },
    {
      icon: <Faculty />,
      Heading: "Employer Reports",
      description: "View a list od their completed feedbacks",
    },
    {
      icon: <StudentCourse />,
      Heading: "Student Course Reports",
      description: "View a list od their completed feedbacks",
    },
    {
      icon: <StudentLab />,
      Heading: "Student Lab Reports",
      description: "View a list od their completed feedbacks",
    },
    {
      icon: <Infrastructure />,
      Heading: "Student Exit Reports",
      description: "View a list od their completed feedbacks",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-start gap-6 py-7 px-6">
        <LeftArrow />
        <h1 className="text-3xl font-bold">Reports</h1>
      </div>

      <div>
        {data.map((value) => {
          return (
            <div className="flex flex-col  py-2">
              <div className="mx-4 flex items-center justify-start gap-6  rounded-xl border-2 border-[#D0D4E3] px-4 font-bold text-[#3E4B79]">
                {value.icon}
                <div className="py-3">
                  <h1>{value.Heading}</h1>
                  <p>{value.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminReports;
