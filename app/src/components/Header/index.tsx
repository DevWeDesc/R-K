import SoonWhite from "@/../public/assets/LogoR&KWhite.png";
import { Nav } from "./Nav";
import { useNavigate } from "react-router-dom";

interface IHeader {
  navIsVisible: boolean;
}

export const Header = ({ navIsVisible }: IHeader) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-redDefault flex items-center px-8 py-2 ${
        !navIsVisible ? "justify-center" : "justify-between"
      }`}
    >
      <img
        onClick={() => navigate("/home")}
        src={SoonWhite}
        className="max-h-20 cursor-pointer"
        alt=""
      />
      {navIsVisible && <Nav />}
    </div>
  );
};
