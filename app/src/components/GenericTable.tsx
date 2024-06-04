import { IGenericTable } from "@/@interfaces/IGenericTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { additionalFieldsTableGenericEnum } from "@/enums/additionalFieldsTableGenericEnum";
import { Button } from "./ui/button";
import { CiEdit, CiSearch, CiTrash } from "react-icons/ci";
import { Input } from "./ui/input";
import { PriceFormatter } from "@/utils/PriceFormatter";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CreateExamsInPetRequestDTO from "@/@interfaces/DTOs/ExamsInPetSolicitation/CreateExamsInPetRequestDTO";
import { CreateExamsInPetSolicitations } from "@/services/ExamsInPetOnSolicitations/CreateExamsInPetSolicitations";
import { IExams } from "@/@interfaces/IExams";
import { useQuery } from "react-query";
import { GetExams } from "@/services/Exams/GetExams";
import { useState } from "react";

type IParamsGuide = {
  id: string;
};

export const GenericTable = ({
  headerTable,
  additionalFields,
  setGuidIsVisible,
  setIsLoading,
  scrollForGuide,
}: IGenericTable) => {
  const { id } = useParams<IParamsGuide>();
  const [pageActual, setPageActual] = useState(1);
  const [examName, setExamName] = useState("");

  const handleMutateLoading = () => {
    setIsLoading && setIsLoading((prev) => (!prev ? true : false));
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["examsList", pageActual, examName],
    queryFn: () => GetExams(pageActual, examName),
  });

  const handleBackPage = () => {
    setPageActual((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setPageActual((prev) => (prev < data?.data.numberPages ? prev + 1 : prev));
  };

  const handleAddNewExamInGuide = async (exam: IExams) => {
    if (id) {
      const dataRequest: CreateExamsInPetRequestDTO = {
        examsId: exam.id,
        solicitationsId: id,
      };
      await CreateExamsInPetSolicitations(dataRequest);
      setGuidIsVisible && setGuidIsVisible();
      toast.success(`Exame ${exam.name} adicionado com sucesso!`);
      scrollForGuide && scrollForGuide();
      handleMutateLoading();
      refetch();
    }
  };

  return (
    <div className="flex flex-col gap-2 pb-20">
      <div className="relative">
        <CiSearch className="text-2xl left-4 absolute top-1/2 -translate-y-1/2" />
        <Input
          onChange={(e) => setExamName(e.target.value)}
          value={examName}
          className="bg-white border rounded text-sm pl-12 hover:opacity-100"
          placeholder="Digite o Exame que deseja procurar"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {headerTable?.map((header, index) => (
              <TableHead
                className="text-center text-white font-bold border bg-redDefault"
                key={index}
              >
                {header}
              </TableHead>
            ))}
            {additionalFields === additionalFieldsTableGenericEnum.list ? (
              <TableHead className="text-center text-white font-bold border bg-redDefault">
                Incluir Exame
              </TableHead>
            ) : (
              <>
                <TableHead className="text-center text-white font-bold border bg-redDefault">
                  Editar Exame
                </TableHead>
                <TableHead className="text-center text-white font-bold border bg-redDefault">
                  Deletar Exame
                </TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody className="max-h-3">
          {isLoading ? (
            <>
              <TableRow className="border h-[710px]"></TableRow>
            </>
          ) : (
            <>
              {data?.data.exams.map((exam: IExams) => {
                return (
                  <TableRow className="border" key={exam.id}>
                    <TableCell className="py-4 border">{exam.name}</TableCell>
                    <TableCell className="border font-medium">
                      {PriceFormatter.format(exam.value)}
                    </TableCell>
                    {additionalFields ===
                    additionalFieldsTableGenericEnum.list ? (
                      <TableCell className="font-semibold border">
                        <Button
                          onClick={() => handleAddNewExamInGuide(exam)}
                          variant="outline"
                          className="rounded-full px-5"
                        >
                          Incluir Exame na Guia
                        </Button>
                      </TableCell>
                    ) : (
                      <>
                        <TableCell className="font-semibold border">
                          <Button
                            variant="outline"
                            className="rounded-full px-4 text-sm hover:bg-zinc-800 hover:text-white"
                          >
                            <CiEdit className="mr-1 text-lg" />
                            Editar Exame
                          </Button>
                        </TableCell>
                        <TableCell className="font-semibold border">
                          <Button
                            variant="outline"
                            className="rounded-full px-4 text-sm hover:text-white hover:bg-red-700 "
                          >
                            <CiTrash className="mr-1 text-lg" />
                            Excluir Exame
                          </Button>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                );
              })}
            </>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-center gap-4">
        <Button onClick={handleBackPage} className="text-sm px-5 font-medium">
          Voltar Página
        </Button>
        {data?.data.pageActual}
        <Button onClick={handleNextPage} className="text-sm px-5 font-medium">
          Próxima anterior
        </Button>
      </div>
    </div>
  );
};
