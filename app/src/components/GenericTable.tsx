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
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { IExams } from "@/@interfaces/IExams";
import { ExamsByGuideMock } from "@/mocks/ExamsByGuideMock";

export const GenericTable = ({
  data,
  additionalFields,
  setGuidIsVisible,
}: IGenericTable) => {
  // const navigate = useNavigate();
  const [searchExamsValue, setSearchExamsValue] = useState("");
  const [examsFilteredBySearch, setExamsFilteredBySearch] = useState<IExams[]>(
    []
  );

  useEffect(() => {
    const examsFiltered = data.exams.filter((exam) =>
      exam.name
        .toLocaleLowerCase()
        .includes(searchExamsValue.toLocaleLowerCase())
    );
    setExamsFilteredBySearch(examsFiltered);
  }, [searchExamsValue]);

  const handleAddNewExamInGuide = (exam: IExams) => {
    toast.success("Exame adicionado com sucesso!");
    ExamsByGuideMock.push(exam);
    setGuidIsVisible && setGuidIsVisible();
    // navigate("/guide/preview");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <CiSearch className="text-2xl left-4 absolute top-1/2 -translate-y-1/2" />
        <Input
          value={searchExamsValue}
          onChange={(ev) => setSearchExamsValue(ev.target.value)}
          className="bg-white border rounded text-sm pl-12 hover:opacity-100"
          placeholder="Digite o Exame que deseja procurar"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {data.headerTable.map((header, index) => (
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
          {examsFilteredBySearch.map((exam) => {
            const priceFormat = new Intl.NumberFormat("sp-BRen-US", {
              style: "currency",
              currency: "BRL",
            });
            return (
              <TableRow className="border" key={exam.id}>
                <TableCell className="py-4 border">{exam.name}</TableCell>
                <TableCell className="border font-medium">
                  {priceFormat.format(exam.price)}
                </TableCell>
                {additionalFields === additionalFieldsTableGenericEnum.list ? (
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
        </TableBody>
      </Table>
    </div>
  );
};
