import SoonWhite from "@/../public/assets/LogoR&KWhite.png";
import { Nav } from "./Nav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface IHeader {
  navIsVisible: boolean;
}

export const Header = ({ navIsVisible }: IHeader) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen((prev) => (prev ? false : true));
  };

  return (
    <div
      className={`bg-redDefault flex items-center px-8 py-2 relative ${
        !navIsVisible ? "justify-center" : "justify-between"
      }`}
    >
      <img
        onClick={() => navigate("/home")}
        src={SoonWhite}
        className="max-h-20 cursor-pointer"
        alt=""
      />
      <div
        className={`flex flex-col items-center absolute md:relative top-0 md:top-0 right-0 bg-redDefault rounded-md p-8 md:p-0 transition-all`}
      >
        <div
          onClick={handleOpenMenu}
          className="p-2 w-10 flex flex-col gap-1 items-center justify-center absolute right-8 md:hidden"
        >
          <div
            className={`h-[2px] w-full bg-white transition-all ${
              menuOpen ? "rotate-45 -mb-[5px]" : "relative"
            }`}
          />
          <div
            className={`h-[2px] w-full bg-white ${
              menuOpen ? "hidden" : "block"
            }`}
          />
          <div
            className={`h-[2px] w-full bg-white transition-all ${
              menuOpen ? "-rotate-45 -mt-[1px]" : "relative"
            }`}
          />
        </div>

        {navIsVisible && <Nav menuOpen={menuOpen} />}
      </div>
    </div>
  );
};
