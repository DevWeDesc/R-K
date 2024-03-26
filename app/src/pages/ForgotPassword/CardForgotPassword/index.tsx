import { ReactElement, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ICardForgotPassword {
  icon: ReactElement;
  title: string;
  description: string;
  textButton: string;
  children: ReactNode;
}

export const CardForgotPassword = ({
  icon,
  children,
  description,
  title,
}: ICardForgotPassword) => {
  const navigate = useNavigate();

  return (
    <div className="font-default flex flex-col justify-center items-center p-14 shadow-lg rounded-md shadow-zinc-300 gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 rounded-full border-2 border-black">{icon}</div>
        <div className="text-center flex flex-col gap-2">
          <p className="text-md font-bold">{title}</p>
          <p className="text-sm opacity-60 max-w-xs">{description}</p>
        </div>
        {children}
      </div>
      <div className="flex flex-col gap-4 items-center w-full">
        <p
          onClick={() => navigate("/register")}
          className="font-bold text-sm cursor-pointer"
        >
          Crie uma Nova conta
        </p>
        <div className="flex w-full items-center gap-5">
          <div className="h-[1px] w-full bg-zinc-200" />
          <p className="font-semibold text-sm">OU</p>
          <div className="h-[1px] w-full bg-zinc-200" />
        </div>
        <p className="text-sm cursor-pointer" onClick={() => navigate("/")}>
          Voltar para o <span className="font-bold text-sm">Login</span>
        </p>
      </div>
    </div>
  );
};
