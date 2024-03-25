import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

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
  return (
    <div className="text-white flex gap-5">
      {Cookies.get("userRole") === "admin"
        ? navData.map((nav, index) => (
            <span
              key={index}
              className="cursor-pointer font-medium"
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
                className="cursor-pointer font-medium"
                onClick={() => navigate(`${nav.Href}`)}
              >
                {nav.Name}
              </span>
            ))}
    </div>
  );
};
