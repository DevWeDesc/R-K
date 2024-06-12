import { IReportPerVet } from "@/@interfaces/ReportsPerVet";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { TbListDetails } from "react-icons/tb";

interface IExhibitionReport {
  reports: IReportPerVet[] | undefined;
}

export const ExhibitionReport = ({ reports }: IExhibitionReport) => {
  return (
    <div>
      <p className="mb-6 text-xl">Guias solicitadas</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id da Guia</TableHead>
            <TableHead>Nome do Tutor</TableHead>
            <TableHead>Nome do Pet</TableHead>
            <TableHead className="text-right">Nome do Veterinário</TableHead>
            <TableHead className="text-right">Visualização</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports?.map((veterinarian) =>
            veterinarian.solicitations.map((solicitations) => (
              <TableRow key={solicitations.id}>
                <TableCell className="font-medium">
                  {solicitations.id.substring(0, 8).concat("...")}
                </TableCell>
                <TableCell>{solicitations.pet.customer.name}</TableCell>
                <TableCell>{solicitations.pet.name}</TableCell>
                <TableCell className="text-right">
                  {veterinarian.name}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" className="px-5">
                    <TbListDetails className="text-xl mr-2" /> Visualizar
                    detalhes da Guia
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
