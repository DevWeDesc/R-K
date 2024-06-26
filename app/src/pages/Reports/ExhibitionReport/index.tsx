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
import { FormatDate } from "@/utils/FormatDate";
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
            {/* <TableHead className="text-right">Valor</TableHead> */}
            <TableHead className="text-right">Visualização</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports?.map((veterinarian) =>
            veterinarian.solicitations.map((solicitations) => {
              const dateActual = new Date(solicitations.finishedIn);
              dateActual.setHours(dateActual.getHours() + 3);
              const namePDFSolicitation = `Guia-${
                solicitations.pet.name
              }-${FormatDate(dateActual, "short", "medium")
                .replace(/[:/]/g, "-")
                .replace(",", "_")
                .replace(" ", "")}`;

              // const valueTotal: number | undefined = solicitations.exams.reduce(
              //   (accumulator, currentValue) =>
              //     accumulator + currentValue.Exams.value,
              //   0
              // );

              return (
                <TableRow key={solicitations.id}>
                  <TableCell className="font-medium">
                    {solicitations.id.substring(0, 8).concat("...")}
                  </TableCell>
                  <TableCell>{solicitations.pet.customer.name}</TableCell>
                  <TableCell>{solicitations.pet.name}</TableCell>
                  <TableCell className="text-right">
                    {veterinarian.name}
                  </TableCell>
                  {/* <TableCell className="text-right">
                    {valueTotal && PriceFormatter.format(valueTotal)}
                  </TableCell> */}
                  <TableCell className="text-right">
                    <a
                      target="_blank"
                      href={`${
                        import.meta.env.VITE_DevelopHost
                      }/solicitations/pdf/${namePDFSolicitation}`}
                    >
                      <Button variant="outline" className="px-5">
                        <TbListDetails className="text-xl mr-2" /> Visualizar
                        detalhes da Guia
                      </Button>
                    </a>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
};
