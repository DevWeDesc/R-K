import SoonWhite from "@/../public/assets/LogoR&KWhite.png";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <div className="bg-redDefault flex items-center px-8 py-2 justify-between">
      <img src={SoonWhite} className="max-h-20" alt="" />
      <Nav />
    </div>
  );
};
