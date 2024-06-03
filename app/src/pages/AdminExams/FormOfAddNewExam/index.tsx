import { ICreateExamRequestDTO } from "@/@interfaces/DTOs/Exams/CreateExamRequestDTO";
import { FormField } from "@/components/FormFIeld";
import { Button } from "@/components/ui/button";
import { CreateExams } from "@/services/Exams/CreateExams";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ZodType, z } from "zod";

interface IAddNewExam {
  name: string;
  value: string;
  deadline: string;
  preparing: string;
}

const AddNewExamSchema: ZodType<IAddNewExam> = z.object({
  name: z.string().min(1, { message: "O campo nome é obrigatório!" }),
  value: z.string().min(1, { message: "O campo preço é obrigatório!" }),
  deadline: z.string().min(1, { message: "O campo prazo é obrigatório!" }),
  preparing: z.string().min(1, { message: "O campo preparo é obrigatório!" }),
});

interface IFormOfAddNewExam {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormOfAddNewExam = ({ setModalIsOpen }: IFormOfAddNewExam) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddNewExam>({ resolver: zodResolver(AddNewExamSchema) });

  const onSubmit = async (valueForm: IAddNewExam) => {
    const { deadline, name, preparing, value } = valueForm;
    const dataRequest: ICreateExamRequestDTO = {
      name,
      value: parseFloat(value),
      preparing,
      deadline,
    };
    console.log(dataRequest);

    await CreateExams(dataRequest)
      .then(() => {
        toast.success("Exame adicionado com sucesso!");
        setModalIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao cadastrar exame!");
      });
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        placeholder="Nome do exame:"
        error={errors.name}
        name="name"
        register={register}
        type="text"
      />
      <FormField
        placeholder="Preço do exame:"
        error={errors.value}
        name="value"
        register={register}
        type="text"
      />
      <FormField
        placeholder="Prazo para o exame em dias:"
        error={errors.deadline}
        name="deadline"
        register={register}
        type="text"
      />
      <FormField
        placeholder="Preparo do exame:"
        error={errors.preparing}
        name="preparing"
        register={register}
        type="text"
      />
      <Button className="text-sm px-6">Cadastrar Exame</Button>
    </form>
  );
};
