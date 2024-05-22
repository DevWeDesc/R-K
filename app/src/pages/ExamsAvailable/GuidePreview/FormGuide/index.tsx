import { ICustomer } from "@/@interfaces/ICustomer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FinalizeSolicitation } from "@/services/Solicitations/FInalizeSolicitation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner8 } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

interface IFormFinalizationGuide {
  emailVeterinarian: string;
}

interface IFormGuide {
  customerInformations: ICustomer | undefined;
  emailVeterinarian: string | undefined;
  observation: string;
  closeModal: () => void;
}

export const FormGuide = ({
  customerInformations,
  emailVeterinarian,
  observation,
  closeModal,
}: IFormGuide) => {
  const { register, handleSubmit } = useForm<IFormFinalizationGuide>();
  const { id } = useParams();
  const emailRK = "rkoficial@gmail.com";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: IFormFinalizationGuide) => {
    const { emailVeterinarian } = data;
    setIsLoading(true);
    if (id)
      await FinalizeSolicitation(id, emailVeterinarian, observation).then(
        () => {
          toast.success("Guia finalizada com sucesso! Enviada pelo email");
          navigate("/home");
          setIsLoading(false);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="grid grid-cols-2 place-items-baseline border rounded-xl p-4">
        <label htmlFor="emailClient" className="text-sm">
          E-mail e telefone do cliente
          <br />
          <span className="text-xs font-bold text-black/70">
            {customerInformations?.email}
          </span>
          <br />
          <span className="text-xs font-bold text-black/70">
            {customerInformations?.phone}
          </span>
        </label>
        <Input
          defaultChecked
          disabled
          id="emailClient"
          className="hover:shadow-none accent-zinc-300 cursor-no-drop"
          type="checkbox"
          value={customerInformations?.email}
        />
      </div>

      <div className="grid grid-cols-2 place-items-baseline border rounded-xl p-4">
        <label htmlFor="emailRK" className="text-sm">
          E-mail da RK
          <br />
          <span className="text-xs font-bold text-black/70">{emailRK}</span>
        </label>
        <Input
          defaultChecked
          disabled
          id="emailRK"
          className="hover:shadow-none accent-zinc-300 cursor-no-drop"
          type="checkbox"
          value={emailRK}
        />
      </div>

      <div className="grid grid-cols-2 place-items-baseline border rounded-xl p-4">
        <label htmlFor="emailVeterinarian" className="text-sm">
          E-mail do Veterinário <br />
          <span className="text-xs text-black/70 font-bold">
            {emailVeterinarian}
          </span>
        </label>
        <Input
          id="emailVeterinarian"
          {...register("emailVeterinarian")}
          className="hover:shadow-none"
          type="checkbox"
          value={emailVeterinarian}
        />
      </div>

      <div className="col-span-2 flex justify-end gap-2 mt-4">
        <Button onClick={closeModal} variant="outline" className="px-6 text-sm">
          Cancelar
        </Button>
        {isLoading ? (
          <Button
            type="button"
            variant="secondary"
            className="px-6 text-sm rounded-full cursor-wait"
          >
            <ImSpinner8 className="text-xl animate-spin mr-2" />
            Carregando
          </Button>
        ) : (
          <Button className="px-6 text-sm">Confirmar</Button>
        )}
      </div>
    </form>
  );
};
