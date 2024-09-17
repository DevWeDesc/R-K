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
import { toast } from "react-toastify";
import { IExams } from "@/@interfaces/IExams";
import { useQuery } from "react-query";
import { GetExams } from "@/services/Exams/GetExams";
import { useState } from "react";
import { DeleteExamService } from "@/services/Exams/DeleteExamService";
import { ModalGeneric } from "./ModalGeneric";
import { FormOfAddNewExam } from "@/pages/AdminExams/FormOfAddNewExam";
import { CiFilter } from "react-icons/ci";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface IModalInformations {
  modalDeleteIsOpened: boolean;
  modalEditIsOpened: boolean;
  exam: IExams | null;
}

export const GenericTable = ({
  headerTable,
  additionalFields,
}: IGenericTable) => {
  const [pageActual, setPageActual] = useState(1);
  const [examName, setExamName] = useState("");
  const [filterOptions, setFilterOptions] = useState("");
  const [modalInformations, setModalInformations] =
    useState<IModalInformations>({
      modalDeleteIsOpened: false,
      modalEditIsOpened: false,
      exam: null,
    });

  const { data, isLoading } = useQuery({
    queryKey: [
      "examsList",
      pageActual,
      examName,
      modalInformations,
      filterOptions,
    ],
    queryFn: () => GetExams(pageActual, examName, filterOptions),
  });

  const handleBackPage = () => {
    setPageActual((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setPageActual((prev) => (prev < data?.data.numberPages ? prev + 1 : prev));
  };

  const handleDeleteExam = async (examId: number) => {
    await DeleteExamService(examId)
      .then(() => {
        toast.success("Exame excluido com sucesso!");
        setModalInformations({
          ...modalInformations,
          modalDeleteIsOpened: false,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="flex flex-col gap-2 pb-20">
      <div className="grid grid-cols-4">
        <div className="relative col-span-3">
          <CiSearch className="text-2xl left-4 absolute top-1/2 -translate-y-1/2" />
          <Input
            onChange={(e) => setExamName(e.target.value)}
            value={examName}
            className="bg-white border rounded text-sm pl-12 hover:opacity-100"
            placeholder="Digite o Exame que deseja procurar"
          />
        </div>
        <Select onValueChange={(value) => setFilterOptions(value)}>
          <div className="relative">
            <SelectTrigger className="w-full h-full outline-none ">
              <CiFilter className="right-0 top-6 text-xl" />
              <SelectValue placeholder="Filtros" />
            </SelectTrigger>
          </div>
          <SelectContent defaultValue="highlights">
            <SelectGroup>
              <SelectItem value="asc">Valor crescente</SelectItem>
              <SelectItem value="desc">Valor decrescente</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
                        <Button variant="outline" className="rounded-full px-5">
                          Incluir Exame na Guia
                        </Button>
                      </TableCell>
                    ) : (
                      <>
                        <TableCell className="font-semibold border">
                          <Button
                            onClick={() =>
                              setModalInformations({
                                ...modalInformations,
                                exam: exam,
                                modalEditIsOpened: true,
                              })
                            }
                            variant="outline"
                            className="rounded-full px-4 text-sm hover:bg-zinc-800 hover:text-white"
                          >
                            <CiEdit className="mr-1 text-lg" />
                            Editar Exame
                          </Button>
                        </TableCell>
                        <TableCell className="font-semibold border">
                          <Button
                            onClick={() =>
                              setModalInformations({
                                ...modalInformations,
                                modalDeleteIsOpened: true,
                                exam: exam,
                              })
                            }
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
      <ModalGeneric
        openModal={modalInformations.modalDeleteIsOpened}
        setModalOpen={() =>
          setModalInformations({
            ...modalInformations,
            modalDeleteIsOpened: false,
          })
        }
        className="w-full"
        textTitle={`Deseja realmente excluir o exame ${modalInformations.exam?.name}?`}
        textDescription="A exclusão de um exame é irreversivel, confirme para realizar a exclusão!"
      >
        <div className="w-full flex justify-end gap-5">
          <Button
            onClick={() =>
              modalInformations.exam &&
              handleDeleteExam(modalInformations.exam.id)
            }
            variant={"destructive"}
            className="px-8 text-sm"
          >
            Deletar
          </Button>
          <Button
            onClick={() =>
              setModalInformations({
                ...modalInformations,
                modalDeleteIsOpened: false,
              })
            }
            variant={"outline"}
            className="px-8 text-sm"
          >
            Cancelar
          </Button>
        </div>
      </ModalGeneric>
      <ModalGeneric
        openModal={modalInformations.modalEditIsOpened}
        setModalOpen={() =>
          setModalInformations({
            ...modalInformations,
            modalEditIsOpened: false,
          })
        }
        className="w-full"
        textTitle="Edite um novo exame agora!"
        textDescription="Para adicionar um novo exame, preencha todos os campos do formulário corretamente!"
      >
        {modalInformations.exam && (
          <FormOfAddNewExam
            exam={modalInformations.exam}
            setModalIsOpen={() =>
              setModalInformations({
                ...modalInformations,
                modalEditIsOpened: false,
              })
            }
          />
        )}
      </ModalGeneric>
    </div>
  );
};
