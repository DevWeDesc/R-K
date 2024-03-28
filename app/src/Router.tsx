import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Home } from "./pages/Home";
import { AdminExams } from "./pages/AdminExams";
import { ExamsAvailable } from "./pages/ExamsAvailable/indext";
import { TabPreview } from "./pages/TabPreview";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="home" element={<Home />} />
        <Route path="exams/admin" element={<AdminExams />} />
        <Route path="exams/available" element={<ExamsAvailable />} />
        <Route path="tab/preview" element={<TabPreview />} />
      </Routes>
    </BrowserRouter>
  );
};
