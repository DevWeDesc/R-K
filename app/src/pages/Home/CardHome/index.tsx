import { ICardHome } from "@/@interfaces/ICardHome";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { StepperModal } from "../StepperModal";

export const CardHome = ({
  title,
  description,
  TextButton,
  LinkButton,
  OpenModal,
}: ICardHome) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-96 flex flex-col items-center justify-center gap-5 p-8 shadow-sm lg:shadow-md shadow-zinc-300 rounded-xl lg:rounded-3xl">
      <p className="max-w-40 font-bold text-3xl text-center">{title}</p>
      <p className="text-xs font-light text-center">{description}</p>
      {!OpenModal ? (
        <Button
          onClick={() => {
            navigate(`${LinkButton}`);
          }}
          className="w-full"
        >
          {TextButton}
        </Button>
      ) : (
        <>
          <StepperModal />
        </>
      )}
    </div>
  );
};
