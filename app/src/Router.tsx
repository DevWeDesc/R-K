import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Home } from "./pages/Home";
import { AdminExams } from "./pages/AdminExams";
import { ExamsAvailable } from "./pages/ExamsAvailable";
import { GuidePreview } from "./pages/GuidePreview";
import { Reports } from "./pages/Reports";
import { FillingInTheGuide } from "./pages/FillingInTheGuide";

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
        <Route path="guide/preview" element={<GuidePreview />} />
        <Route path="guide/fill" element={<FillingInTheGuide />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
};
