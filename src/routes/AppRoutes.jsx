import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login.jsx";
import Quiz from "../pages/Quiz/QuizQuestion.jsx";
import SignUp from "../pages/Signup/SignUp.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import UserLayout from "../layouts/User/User.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Sign-Up" element={<SignUp />} />

      <Route element={<UserLayout/>} >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
     </Route>
    </Routes>
  );
}
