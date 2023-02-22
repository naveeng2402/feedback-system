import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/global/ProtectedRoute";
import { SignIn, SignUp } from "@/pages/auth";
import AuthBase from "@/layouts/AuthBase";
import DashBoard from "@/pages/stud/DashBoard";
import Error404 from "@global/Error404";
import StudentProfile from "./pages/auth/StudentProfile";
import StudentBase from "./layouts/StudentBase";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="auth/" element={<AuthBase />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Route>

      <Route path="/stud/" element={<ProtectedRoute roles={["stud"]} />}>
        <Route path="profile/" element={<StudentProfile />} />
        <Route element={<StudentBase />}>
          <Route path="dashboard/" element={<DashBoard />} />
        </Route>
      </Route>
      <Route path="/staff/" element={<ProtectedRoute roles={["staff"]} />}>
        <Route path="dashboard/" element={<DashBoard />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
