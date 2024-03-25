import SoonWhite from "@/../public/assets/LogoR&KWhite.png";

export const SoonRedRightGrid = () => {
  return (
    <div className="hidden bg-redDefault lg:flex flex-col items-center justify-center h-full gap-5">
      <img src={SoonWhite} alt="Logo R&K branca" />
      <div className="font-timesNew text-white flex flex-col text-center">
        <h1 className="text-6xl">R&K</h1>
        <p className="text-3xl">Diagnóstico Veterinário</p>
      </div>
    </div>
  );
};
