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
import { CiEdit, CiTrash } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const GenericTable = ({ data, additionalFields }: IGenericTable) => {
  const navigate = useNavigate();

  const handleAddNewExamInTab = () => {
    toast.success("Exame adicionado com sucesso!");
    navigate("/tab/preview");
  };

  return (
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
        {data.exams.map((exam) => {
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
                    onClick={handleAddNewExamInTab}
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
  );
};
