import { ICreateExamRequestDTO } from "@/@interfaces/DTOs/Exams/CreateExamRequestDTO";
import { IExams } from "@/@interfaces/IExams";
import { FormField } from "@/components/FormFIeld";
import { Button } from "@/components/ui/button";
import { CreateExams } from "@/services/Exams/CreateExams";
import { EditExamsService } from "@/services/Exams/EditExamsService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ZodType, z } from "zod";

export interface IAddNewExam {
  name: string;
  value: string;
  deadline: string;
  preparing: string;
}

export const AddNewExamSchema: ZodType<IAddNewExam> = z.object({
  name: z.string().min(1, { message: "O campo nome é obrigatório!" }),
  value: z.string().min(1, { message: "O campo preço é obrigatório!" }),
  deadline: z.string().min(1, { message: "O campo prazo é obrigatório!" }),
  preparing: z.string().min(1, { message: "O campo preparo é obrigatório!" }),
});

interface IFormOfAddNewExam {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  exam?: IExams;
}

export const FormOfAddNewExam = ({
  setModalIsOpen,
  exam,
}: IFormOfAddNewExam) => {
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

    if (exam)
      return await EditExamsService(exam.id, dataRequest).then(() => {
        toast.success("Exame editado com sucesso!");
        setModalIsOpen(false);
      });

    await CreateExams(dataRequest)
      .then(() => {
        toast.success("Exame adicionado com sucesso!");
        setModalIsOpen(false);
      })
      .catch(() => {
        toast.error("Erro ao cadastrar exame!");
      });
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        defaultValue={exam && exam.name}
        placeholder="Nome do exame:"
        error={errors.name}
        name="name"
        register={register}
        type="text"
      />
      <FormField
        defaultValue={exam && exam.value}
        placeholder="Preço do exame:"
        error={errors.value}
        name="value"
        register={register}
        type="text"
      />
      <FormField
        defaultValue={exam && exam.deadline}
        placeholder="Prazo para o exame em dias:"
        error={errors.deadline}
        name="deadline"
        register={register}
        type="text"
      />
      <FormField
        defaultValue={exam && exam.preparing}
        placeholder="Preparo do exame:"
        error={errors.preparing}
        name="preparing"
        register={register}
        type="text"
      />
      <Button className="text-sm px-6">
        {!exam ? "Cadastrar Exame" : "Editar Exame"}
      </Button>
    </form>
  );
};
