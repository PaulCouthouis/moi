import { ContactInformationBuilder, ContactInformationEntity, ContactInformationRepository } from './builders/ContactInformation'
import { MainInformationBuilder, MainInformationEntity, MainInformationRepository } from './builders/MainInformation'

interface PaulDataSelectors {
  getMainInformation: () => Promise<MainInformationEntity>
  getContactInformation: () => Promise<ContactInformationEntity>
}

export interface PaulDataRepository {
  getContactInformation: ContactInformationRepository
  getMainInformation: MainInformationRepository
}

export const PaulDataBuilder: (repository: PaulDataRepository) => PaulDataSelectors = (
  repository: PaulDataRepository
) => ({
  getMainInformation: async () => await MainInformationBuilder(repository.getMainInformation),
  getContactInformation: async () => await ContactInformationBuilder(repository.getContactInformation)
})
