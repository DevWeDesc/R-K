import { ExamsInPetOnSolicitations } from "@prisma/client";
import SolicitationsRepository from "../../../../infra/repositories/Solicitations/SolicitationsRepository";
import { FormatedValueForCurrent } from "../../../../utils/FormatedValueForCurrent";
import SolicitationsNotFoundError from "../../../errors/Solicitations/SolicitationsNotFound";

interface ISolicitationDetails {
  id: string;
  veterinariansId: number;
  petsId: number;
  exams?: ExamsInPetOnSolicitations[];
}

export default class GetUniqueSolicitationsUseCase {
  constructor(readonly solicitationRepository: SolicitationsRepository) {}

  async execute(idSolicitation: string) {
    const solicitationsDetails: ISolicitationDetails | null =
      await this.solicitationRepository.findById(idSolicitation);

    if (!solicitationsDetails) throw new SolicitationsNotFoundError();

    let total: number = 0;

    if (solicitationsDetails?.exams) {
      total = solicitationsDetails.exams.reduce(
        (accumulator: number, solicitation: any) =>
          accumulator + solicitation.Exams.value,
        0
      );
    }

    return { solicitationsDetails, total: FormatedValueForCurrent(total) };
  }
}
