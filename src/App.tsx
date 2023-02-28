import { Route, Routes } from "react-router-dom";
import MyRadioGroup from "./components/ui/QuestionsCard";
import ProtectedRoute from "./components/global/ProtectedRoute";
import { SignIn, SignUp } from "@/pages/auth";
import AuthBase from "@/layouts/AuthBase";
import DashBoard from "@/pages/stud/DashBoard";
import Error404 from "@global/Error404";
import StudentProfile from "./pages/auth/StudentProfile";
import StudentBase from "./layouts/StudentBase";
import { ReactComponent as Good } from "@icons/Good.svg";
import { useState } from "react";
import FeedbackAccordion from "./components/ui/FeedbackAccordion";
// import RatingChip from "./components/ui/Ratingchip";
import FeedbackDetails from "./components/ui/FeedbackDetails";
import PlusButton from "./components/ui/PlusButton";
import Button from "./components/ui/Button";
import StaffDetails from "./components/ui/StaffDetails";
import SubjectCard from "./components/ui/StaffInput";
function App() {
  const FA = [
    {
      score: "20%",
      icon: <Good />,
    },
    {
      score: "40%",
      icon: <Good />,
    },
    {
      score: "60%",
      icon: <Good />,
    },
    {
      score: "80%",
      icon: <Good />,
    },
    {
      score: "100%",
      icon: <Good />,
    },
  ];

  // const plans = [
  //   {
  //     id: 1,
  //     review: "Excellent",
  //     image: Good,
  //   },
  //   {
  //     id: 2,
  //     review: "Very Good",
  //     image: Good,
  //   },
  //   {
  //     id: 3,
  //     review: "Good",
  //     image: Good,
  //   },
  //   {
  //     id: 4,
  //     review: "Bad",
  //     image: Good,
  //   },
  // ];
  // const [plan, setPlan] = useState(plans[1]);
  return (
    // <Routes>
    //   <Route path="/">
    //     <Route path="auth/" element={<AuthBase />}>
    //       <Route path="sign-up" element={<SignUp />} />
    //       <Route path="sign-in" element={<SignIn />} />
    //     </Route>
    //   </Route>

    //   <Route path="/stud/" element={<ProtectedRoute roles={["stud"]} />}>
    //     <Route path="profile/" element={<StudentProfile />} />
    //     <Route element={<StudentBase />}>
    //       <Route path="dashboard/" element={<DashBoard />} />
    //     </Route>
    //   </Route>
    //   <Route path="/staff/" element={<ProtectedRoute roles={["staff"]} />}>
    //     <Route path="dashboard/" element={<DashBoard />} />
    //   </Route>

    //   <Route path="*" element={<Error404 />} />
    // </Routes>
    // <div className="my-6 flex items-center justify-center">
    //   <MyRadioGroup
    //     label="1. Punctuality with regularity in taking classes *"
    //     Options={plans}
    //     value={plan}
    //     setValue={setPlan}
    //   />
    // </div>
    // <div className="m-4 w-12">
    //   {/* <MyDisclosure /> */}
    //   <Ratingchip rating="4.7" />
    // </div>

    <div className="m-4 ">
      <FeedbackAccordion
        overallRating={1.5}
        Options={FA}
        question="Punctuality with regularity in taking classes* "
        questionNumber="1."
      />

      {/* <FeedbackDetails
        ProfessorName="Mr.Lin Eby Chandra"
        SubjectName="Object Oriented Programming Laboratory(CS8492)"
        Department="CSE"
        Section="--"
        Semester={6}
        batch="2020-2024"
        yearButton={<Button className="px-2 py-2">View Report </Button>}
      /> */}

      {/* <StaffDetails
        dept="CSE"
        designation="Asst.Prof"
        professorname="Mr.Iranya Pandiyan"
        staffid="xxxxx"
      /> */}

      {/* <SubjectCard
        professorname="Asst Prof.  Iranya Pandiyan"
        subjectname="Object Oriented Programming Laboratory (CS8603)"
      /> */}

      {/* <PlusButton /> */}
    </div>
  );
}

export default App;
