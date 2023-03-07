import { FC } from "react";
import { ReactComponent as LeftArrow } from "@icons/LeftArrow.svg";
import { ReactComponent as Faculty } from "@icons/Faculty.svg";
import { ReactComponent as Infrastructure } from "@icons/Infrastructure.svg";
import { ReactComponent as StudentLab } from "@icons/StudentLab.svg";
import { ReactComponent as StudentCourse } from "@icons/StudentCourse.svg";
import { ReactComponent as Alumni } from "@icons/Alumni.svg";
import { NavLink } from "react-router-dom";

const AdminReports: FC = ({}) => {
  const data = [
    {
      icon: <Alumni className="h-8 w-8" />,
      Heading: "Alumni Reports",
      description: "View a list of their completed feedbacks",
    },
    {
      icon: <Faculty className="h-8 w-8" />,
      Heading: "Employer Reports",
      description: "View a list of their completed feedbacks",
    },
    {
      icon: <StudentCourse className="h-8 w-8" />,
      Heading: "Student Course Reports",
      description: "View a list of their completed feedbacks",
    },
    {
      icon: <StudentLab className="h-8 w-8" />,
      Heading: "Student Lab Reports",
      description: "View a list of their completed feedbacks",
    },
    {
      icon: <Infrastructure className="h-8 w-8" />,
      Heading: "Student Exit Reports",
      description: "View a list of their completed feedbacks",
    },
  ];

  return (
    <div>
      <header className="flex items-center justify-start gap-6 py-7 px-6">
        <NavLink to="/admin/dashboard">
          <LeftArrow />
        </NavLink>
        <h1 className="text-3xl font-bold">Reports</h1>
      </header>

      <main className="space-y-4">
        {data.map((value) => {
          return (
            <div className="mx-4 flex items-center justify-start gap-6  rounded-xl border-2 border-[#D0D4E3] stroke-[#407BFF] px-4 font-bold text-[#3E4B79]">
              {value.icon}
              <div className="py-3">
                <h5 className="text-xl">{value.Heading}</h5>
                <p className="font-normal">{value.description}</p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default AdminReports;
