import { ModalGeneric } from "@/components/ModalGeneric";
import { Button } from "@/components/ui/button";
import { userRoleEnum } from "@/enums/UserRoleEnum";
import { VariantsButtonEnum } from "@/enums/VariantsButtonEnum";
import { FormRegister } from "@/pages/Register/FormRegister";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface INavData {
  Name: string;
  Href: string;
  requiredAdmin?: boolean;
}

const navData: INavData[] = [
  { Name: "Exames Disponíveis", Href: "/exams/available" },
  { Name: "Cadastrar Exames", Href: "/exams/admin", requiredAdmin: true },
  { Name: "Relatórios", Href: "/reports" },
];

interface INavProp {
  menuOpen: boolean;
}

export const Nav = ({ menuOpen }: INavProp) => {
  const navigate = useNavigate();
  // const [openModal, setOpenModal] = useState(false);
  // const [openModalCreateAdmin, setOpenModalCreateAdmin] = useState(false);
  const [openModals, setOpenModals] = useState({
    newAdmin: false,
    session: false,
  });

  const handleCloseSessionUser = () => {
    Cookies.remove("userRole");
    localStorage.user = null;
    toast.success("Sessão encerrada com sucesso!");
    navigate("/");
  };

  const handleCloseModalSession = () => {
    setOpenModals({ ...openModals, session: false });
  };

  const handleStateModalSession = (value: boolean) => {
    setOpenModals({ ...openModals, session: value });
  };

  const handleCloseModalNewAdmin = () => {
    setOpenModals({ ...openModals, newAdmin: false });
  };

  const handleStateModalNewAdmin = (value: boolean) => {
    setOpenModals({ ...openModals, newAdmin: value });
  };

  return (
    <div
      className={`text-white items-center mt-16 md:mt-0 gap-5 text-sm ${
        menuOpen ? "flex flex-col" : "hidden"
      } md:flex`}
    >
      {Cookies.get("userRole") === userRoleEnum.admin ? (
        <>
          <ModalGeneric
            variantButton={VariantsButtonEnum.link}
            textButtonActive="Adicionar Admin"
            textTitle="Adicione usuário administrador"
            textDescription="Adicione um usuário administrador para a execução de funcionalidades como admin"
            openModal={openModals.newAdmin}
            setModalOpen={(ev) => handleStateModalNewAdmin(ev)}
          >
            <>
              <FormRegister closeModal={handleCloseModalNewAdmin} isAdmin />
            </>
          </ModalGeneric>
          {navData.map((nav, index) => (
            <span
              key={index}
              className="cursor-pointer font-semibold"
              onClick={() => navigate(`${nav.Href}`)}
            >
              {nav.Name}
            </span>
          ))}
        </>
      ) : (
        navData
          .filter((nav) => !nav.requiredAdmin)
          .map((nav, index) => (
            <span
              key={index}
              className="cursor-pointer font-semibold"
              onClick={() => navigate(`${nav.Href}`)}
            >
              {nav.Name}
            </span>
          ))
      )}
      <ModalGeneric
        variantButton={VariantsButtonEnum.link}
        textButtonActive="Encerrar Sessão"
        textTitle="Tem certeza que deseja encerrar a sessão?"
        textDescription="Após encerrar a sessão você vai sair da sua conta, deseja confirmar?"
        openModal={openModals.session}
        setModalOpen={(ev) => handleStateModalSession(ev)}
      >
        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={handleCloseModalSession}
            variant="outline"
            className="rounded-full"
          >
            Cancelar
          </Button>
          <Button onClick={handleCloseSessionUser}>Confirmar</Button>
        </div>
      </ModalGeneric>
    </div>
  );
};
