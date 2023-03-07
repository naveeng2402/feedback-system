import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/global/ProtectedRoute";
import { SignIn, SignUp } from "@/pages/auth";
import AuthBase from "@/layouts/AuthBase";
import DashBoard from "@/pages/stud/DashBoard";
import Error404 from "@global/Error404";
import StudentProfile from "./pages/auth/StudentProfile";
import StudentBase from "./layouts/StudentBase";
import { FeedbackList } from "@/pages/stud";
import AdminBase, { AdminReportNav } from "./layouts/AdminBase";
import { FeedbackResult } from "./pages/admin";
import StaffManagement from "./pages/admin/StaffManagement";
import LandingPage from "./pages/common/LandingPage";
import EmployerFeedback from "./pages/common/EmployerFeedback";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="auth/" element={<AuthBase />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        <Route path="/employer-feedback" element={<EmployerFeedback />} />
        <Route path="" element={<LandingPage />} />
      </Route>

      <Route path="/stud/" element={<ProtectedRoute roles={["stud"]} />}>
        <Route path="profile/" element={<StudentProfile />} />
        <Route element={<StudentBase />}>
          <Route path="dashboard/" element={<DashBoard />} />
          <Route path="feedback-list/" element={<FeedbackList />} />
        </Route>
      </Route>
      <Route path="/staff/" element={<ProtectedRoute roles={["staff"]} />}>
        <Route path="dashboard/" element={<DashBoard />} />
      </Route>
      <Route path="/admin/" element={<ProtectedRoute roles={["admin"]} />}>
        <Route element={<AdminBase />}>
          <Route path="staff_management/" element={<StaffManagement />} />
          <Route path="reports/" element={<AdminReportNav />}>
            <Route
              path="stud_course/"
              element={<FeedbackResult report="stud_course" />}
            />
            <Route
              path="stud_lab/"
              element={<FeedbackResult report="stud_lab" />}
            />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
