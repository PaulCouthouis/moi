import { MainInformationBuilder, MainInformationEntity, MainInformationRepository } from './MainInformation/MainInformation'

interface PaulDataSelectors {
  getMainInformation: () => Promise<MainInformationEntity>
}

export interface PaulDataRepository {
  getMainInformation: MainInformationRepository
}

export const PaulDataBuilder: (repository: PaulDataRepository) => PaulDataSelectors = (
  repository: PaulDataRepository
) => ({
  getMainInformation: async () => await MainInformationBuilder(repository.getMainInformation)
})
