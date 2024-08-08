import LogoRk from "@/../public/assets/LogoDefaultR&K.png";

export const HeaderGuide = () => {
  return (
    <div className="w-full gap-10 grid grid-cols-4 items-center">
      <img src={LogoRk} className="w-[70%]" alt="" />
      <div className=" rounded-xl border-2 border-red-700 p-4 col-span-2 gap-4 flex w-full text-xs justify-center">
        <div className="col-span-2">
          <p>Rua Ártico, 248 - Jardim do Mar</p>
          <p>São Bernardo do Campo - SP - CEP: 09726-300</p>
          <div className="flex gap-4">
            <div>
              <strong>Telefones</strong>
              <p>(11) 4122-3733</p>
            </div>
            <div>
              <strong>Whatsapp:</strong>
              <p>(11) 99652-8389 | (11) 99862-4394</p>
            </div>
          </div>
        </div>
        <div>
          <strong>Horário de Atendimento:</strong>
          <p>De segunda a sexta: 8h ás 18h</p>
          <p>Sábados e feriados: 7h ás 16h</p>
        </div>
      </div>
      <div className="h-full border-2 border-red-700 rounded-xl relative">
        <p className="absolute text-gray-500 px-2 bg-white -top-3 left-1/2 -translate-x-1/2">
          CARIMBO
        </p>
      </div>
    </div>
  );
};
