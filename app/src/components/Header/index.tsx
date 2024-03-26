import SoonWhite from "@/../public/assets/LogoR&KWhite.png";
import { Nav } from "./Nav";

interface IHeader {
  navIsVisible: boolean;
}

export const Header = ({ navIsVisible }: IHeader) => {
  return (
    <div
      className={`bg-redDefault flex items-center px-8 py-2 ${
        !navIsVisible ? "justify-center" : "justify-between"
      }`}
    >
      <img src={SoonWhite} className="max-h-20" alt="" />
      {navIsVisible && <Nav />}
    </div>
  );
};
