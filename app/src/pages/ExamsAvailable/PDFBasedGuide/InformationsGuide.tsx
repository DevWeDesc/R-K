import { Input } from "@/components/ui/input";
import { Table, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { SolicitationById } from "@/services/Solicitations/SolicitationById";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

type ParamsType = {
  id: string;
};
export const InformationsGuide = () => {
  const { id } = useParams<ParamsType>();
  const { data, refetch } = useQuery({
    queryKey: ["solicitation"],
    queryFn: () => SolicitationById(id ? id : ""),
  });

  if (id)
    return (
      <div className="flex flex-col gap-5 mt-5">
        <div className="relative flex flex-col items-center justify-center">
          <p className="bg-red-700 rounded-t-sm py-1 px-10 font-medium text-white">
            REQUISIÇÃO DE EXAMES
          </p>
          <div className="absolute bottom-0 w-full h-1 bg-red-700 rounded-xl" />
        </div>
        <Table>
          <TableBody className="text-sm">
            <TableRow>
              <TableCell>
                Pet: {data?.data.solicitationsDetails.pet.name}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <p>Esp: </p>
                  <div className="flex gap-1">
                    <Input
                      defaultChecked
                      id="espCanine"
                      className="caret-red-700 accent-red-700 hover:shadow-none"
                      type="radio"
                      name="esp"
                      value="Canina"
                    />
                    <label htmlFor="espCanine">Canina</label>
                  </div>
                  <div className="flex gap-1">
                    <Input
                      id="espFeline"
                      type="radio"
                      className="caret-red-700 accent-red-700 hover:shadow-none"
                      name="esp"
                      value="Felina"
                    />
                    <label htmlFor="espFeline">Felina</label>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <p>Sexo: </p>
                  <div className="flex gap-1">
                    <Input
                      defaultChecked
                      id="sexMale"
                      className="caret-red-700 accent-red-700 hover:shadow-none"
                      type="radio"
                      name="sexAnimal"
                      value="Macho"
                    />
                    <label htmlFor="sexMale">Macho</label>
                  </div>
                  <div className="flex gap-1">
                    <Input
                      id="sexFemale"
                      type="radio"
                      className="caret-red-700 accent-red-700 hover:shadow-none"
                      name="sexAnimal"
                      value="Femea"
                    />
                    <label htmlFor="sexFemale">Fêmea</label>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                Idade: {data?.data.solicitationsDetails.pet.age}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                Tutor: {data?.data.solicitationsDetails.pet.customer?.name}
              </TableCell>
              <TableCell colSpan={2}>
                E-mail: {data?.data.solicitationsDetails.pet.customer?.email}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Clínica: RK</TableCell>
              <TableCell colSpan={2}>Fone: (11) 4122-3733</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                Veterinário:{" "}
                {data?.data.solicitationsDetails.veterinarians.name}
              </TableCell>
              <TableCell colSpan={2}>
                CRMV: {data?.data.solicitationsDetails.veterinarians.crmv}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                Email vet: {data?.data.solicitationsDetails.veterinarians.email}
              </TableCell>
              <TableCell colSpan={2}>
                Data:{" "}
                {/* {FormatDate(
                  new Date(data?.data.solicitationsDetails.createdIn as string),
                  "short",
                  "medium"
                ).replace(",", " às")} */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
};
