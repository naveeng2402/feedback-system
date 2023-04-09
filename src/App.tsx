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
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminReports from "./pages/admin/AdminReports";
import ResponseList from "./pages/admin/ResponseList";
import Error403 from "./components/global/Error403";
import ResponseResult from "./pages/admin/ResponseResult";
import AlumniFeedback from "./pages/common/AlumniFeedback";
import PublishFeedback from "./pages/admin/PublishFeedback";
import Feedback from "./pages/stud/Feedback";
import UnProtectedRoute from "./components/global/UnProtectedRoute";
import ManageFeedbackList from "./pages/admin/ManageFeedbackList";
import StudentReport from "./pages/admin/StudentReport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UnProtectedRoute />}>
        <Route path="auth/" element={<AuthBase />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        <Route path="/employer-feedback" element={<EmployerFeedback />} />
        <Route path="/alumni-feedback" element={<AlumniFeedback />} />
        <Route path="" element={<LandingPage />} />
      </Route>

      <Route path="/stud/" element={<ProtectedRoute roles={["stud"]} />}>
        <Route path="profile/" element={<StudentProfile />} />
        <Route
          path="provide-feedback/:feedbackType/:feedbackId"
          element={<Feedback />}
        />
        <Route element={<StudentBase />}>
          <Route path="dashboard/" element={<DashBoard />} />
          <Route
            path="feedback-list/:feedbackType"
            element={<FeedbackList />}
          />
        </Route>
      </Route>
      <Route path="/staff/" element={<ProtectedRoute roles={["staff"]} />}>
        <Route path="dashboard/" element={<DashBoard />} />
      </Route>
      <Route path="/admin/" element={<ProtectedRoute roles={["admin"]} />}>
        <Route path="dashboard/" element={<AdminDashboard />} />
        <Route element={<AdminBase />}>
          <Route path="report-list/" element={<AdminReports />} />
          <Route path="staff_management/" element={<StaffManagement />} />
          <Route path="publish-feedback" element={<PublishFeedback />} />
          <Route
            path="response-result/:responseType/:id"
            element={<ResponseResult />}
          />
          <Route path="manage-feedback/" element={<ManageFeedbackList />} />
          <Route element={<AdminReportNav />}>
            <Route
              path="response-list/:responseType"
              element={<ResponseList />}
            />
            <Route path="reports/">
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
          <Route
            path="student-report/:feedbackId"
            element={<StudentReport />}
          />
        </Route>
      </Route>

      <Route path="errors">
        <Route path="403" element={<Error403 />} />
        <Route path="404" element={<Error404 />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
