import { IFormFillTheGuide } from "@/@interfaces/FillingInTheGuide";
import { InputRequiredError } from "@/components/Errors/InputRequiredError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

export const FormFillTheGuide = () => {
  // const navigate = useNavigate();

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<IFormFillTheGuide>();

  // const HandleSubmitGuide = handleSubmit((value) => {
  //   const { nameClient, namePet, email, phone, dateAt, observations } = value;

  //   const data = {
  //     nameClient,
  //     namePet,
  //     email,
  //     phone,
  //     dateAt,
  //     observations,
  //   };

  //   navigate("/home");
  //   toast.success("Guia criada com sucesso!");
  // });

  return (
    <form
      //  onSubmit={HandleSubmitGuide}
      className="w-full flex flex-col gap-2"
    >
      <div className="w-full grid grid-cols-2 gap-2">
        <div>
          <Input
            {...register("nameClient", { required: true })}
            placeholder="Nome do Ciente"
          />
          {errors.nameClient && (
            <InputRequiredError inputName="Nome do Ciente" />
          )}
        </div>
        <div>
          <Input
            {...register("namePet", { required: true })}
            placeholder="Nome do Animal"
          />
          {errors.namePet && <InputRequiredError inputName="Nome do Animal" />}
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-2">
        <div>
          <Input
            {...register("email", { required: true })}
            placeholder="E-mail"
          />
          {errors.email && <InputRequiredError inputName="E-mail" />}
        </div>
        <div>
          <Input
            {...register("phone", { required: true })}
            placeholder="Telefone"
          />
          {errors.phone && <InputRequiredError inputName="Telefone" />}
        </div>
        <div>
          <Input
            {...register("dateAt", { required: true })}
            placeholder="Data"
          />
          {errors.dateAt && <InputRequiredError inputName="Data" />}
        </div>
      </div>
      <textarea
        {...register("observations", { required: true })}
        placeholder="Observações:"
        className="w-full bg-zinc-200 rounded-lg p-2 text-sm min-h-20"
      />
      {errors.observations && <InputRequiredError inputName="Observações:" />}
      <Button className="mt-4" type="submit">
        Enviar
      </Button>
    </form>
  );
};
