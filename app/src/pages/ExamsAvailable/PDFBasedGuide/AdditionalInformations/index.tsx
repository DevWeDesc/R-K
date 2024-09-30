import { IFormSolicitation } from "@/@interfaces/IFormSolicitation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { useQuery } from "react-query";
import { GetAllVeterinarians } from "@/services/Veterinarians/GetAllVeterinarians";

export const AdditionalInformations = () => {
  const { data: veterinarians } = useQuery({
    queryKey: ["veterinarians"],
    queryFn: () => GetAllVeterinarians(),
  });

  const { register, control } = useFormContext<IFormSolicitation>();
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div>
        <label htmlFor="observationGuide">
          <p className="bg-grayTypeExams py-2 text-sm font-medium rounded-md pl-2">
            OBSERVAÇÕES / HISTÓRICO / SUSPEITA CLÍNICA:
          </p>
        </label>
        <div className="px-4">
          <textarea
            placeholder="Digite aqui as observações da guia."
            {...register("observationGuide")}
            className="w-full border border-grayTypeExams rounded-md min-h-20 max-h-20 p-2 mt-1"
            name="observationGuide"
            id="observationGuide"
            rows={2}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="specialistReferred">
          <p className="bg-grayTypeExams py-2 text-sm font-medium rounded-md pl-2">
            ENCAMINHAMENTO PARA CONSULTA COM ESPECIALISTA:
          </p>
        </label>
        <div className="grid grid-cols-2 mx-4 gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm" htmlFor="">
              Especialista:
            </label>
            <Controller
              name="referralWithSpecialistSection.veterinarianId"
              control={control}
              render={({ field }) => (
                <>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger id="specialistReferred" className="w-full">
                      <SelectValue
                        placeholder="Listagem de espacialistas"
                        {...field}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={"0"}>
                          Não necessita de especialista
                        </SelectItem>
                        {veterinarians?.data.map((veterinarian) => (
                          <SelectItem
                            key={veterinarian.id}
                            value={veterinarian.id.toString()}
                          >
                            {veterinarian.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </>
              )}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm" htmlFor="">
              Histórico:
            </label>
            <Input
              {...register("referralWithSpecialistSection.historic")}
              className="bg-white py-0 border-b border-black rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
