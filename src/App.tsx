import { createClient, useQuery } from "urql";
import { regs } from "@/graphql/queries/regulations";
import { ReactComponent as Chevron } from "@icons/Chevron.svg";
import { AuthContext, type IAuthContext } from "@/context/auth";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Button from "@ui/Button";
import ProtectedRoute from "./components/global/ProtectedRoute";
import { AuthBase, SignIn, SignUp } from "./pages/auth";
import DashBoard from "./pages/DashBoard";
import Error404 from "./components/global/Error404";

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
        <Route path="dashboard/" element={<DashBoard />} />
      </Route>
      <Route path="/staff/" element={<ProtectedRoute roles={["staff"]} />}>
        <Route path="dashboard/" element={<DashBoard />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
