import { ModalGeneric } from "@/components/Modal";
import { userRoleEnum } from "@/enums/UserRoleEnum";
import { VariantsButtonEnum } from "@/enums/VariantsButtonEnum";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface INavData {
  Name: string;
  Href: string;
  requiredAdmin?: boolean;
}

const navData: INavData[] = [
  { Name: "Exames Disponíveis", Href: "" },
  { Name: "Cadastrar Exames", Href: "", requiredAdmin: true },
  { Name: "Relatórios", Href: "" },
];

export const Nav = () => {
  const navigate = useNavigate();

  const handleCloseSessionUser = () => {
    Cookies.remove("userRole");
    toast.success("Sessão encerrada com sucesso!");
    navigate("/");
  };

  return (
    <div className="text-white flex items-center gap-5 text-sm">
      {Cookies.get("userRole") === userRoleEnum.admin
        ? navData.map((nav, index) => (
            <span
              key={index}
              className="cursor-pointer font-semibold"
              onClick={() => navigate(`${nav.Href}`)}
            >
              {nav.Name}
            </span>
          ))
        : navData
            .filter((nav) => !nav.requiredAdmin)
            .map((nav, index) => (
              <span
                key={index}
                className="cursor-pointer font-semibold"
                onClick={() => navigate(`${nav.Href}`)}
              >
                {nav.Name}
              </span>
            ))}
      <ModalGeneric
        variantButton={VariantsButtonEnum.link}
        textButtonActive="Encerrar Sessão"
        textTitle="Tem certeza que deseja encerrar a sessão?"
        textDesciption="Após encerrar a sessão você vai sair da sua conta, deseja confirmar?"
        textPrimaryButton="Cancelar"
        textSecondaryButton="Confirmar"
        functionOnClickSecondaryButton={() => handleCloseSessionUser()}
      />
    </div>
  );
};
