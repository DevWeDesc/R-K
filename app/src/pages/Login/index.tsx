import SoonDefault from "@/../public/assets/LogoDefaultR&K.png";
import { FormLogin } from "./FormLogin";
import { useNavigate } from "react-router-dom";
import { SoonRedRightGrid } from "@/components/SoonRedRightGrid";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col w-2/3 xl:w-3/5 max-w-lg items-center justify-center ">
          <img className="mb-8" src={SoonDefault} alt="Logo padrão da R&K" />
          <FormLogin />
          <div className="mt-5 text-subTextColor flex flex-col gap-2 text-center">
            <span
              className="cursor-pointer text-sm"
              onClick={() => navigate("/forgotpassword")}
            >
              Esqueceu a senha?
            </span>
            <span className="text-sm">
              É novo por aqui?
              <strong
                className="cursor-pointer "
                onClick={() => navigate("/register")}
              >
                {" "}
                Cadastre-se
              </strong>
            </span>
          </div>
        </div>
      </div>
      <SoonRedRightGrid />
    </div>
  );
};
