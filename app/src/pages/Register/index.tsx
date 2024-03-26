import SoonDefault from "@/../public/assets/LogoDefaultR&K.png";
import { SoonRedRightGrid } from "@/components/SoonRedRightGrid";
import { useNavigate } from "react-router-dom";
import { FormRegister } from "./FormRegister";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center h-full">
        <div className="p-5 lg:p-0 flex flex-col xl:w-4/5 items-center justify-center ">
          <img className="mb-8" src={SoonDefault} alt="Logo padrão da R&K" />
          <FormRegister />
          <div className="mt-5 text-subTextColor flex flex-col gap-2 text-center">
            <span
              className="cursor-pointer text-sm"
              onClick={() => navigate("/")}
            >
              Voltar para o <strong>Login</strong>
            </span>
          </div>
        </div>
      </div>
      <SoonRedRightGrid />
    </div>
  );
};
