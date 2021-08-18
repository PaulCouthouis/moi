import { ContactInformationBuilder, ContactInformationEntity, ContactInformationRepository } from './builders/ContactInformation'
import { MainInformationBuilder, MainInformationEntity, MainInformationRepository } from './builders/MainInformation'
import { MethodsInformationBuilder, MethodInformationEntity, MethodsInformationRepository } from './builders/MethodsInformation'

interface PaulDataSelectors {
  getMainInformation: () => Promise<MainInformationEntity>
  getContactInformation: () => Promise<ContactInformationEntity>
  getMethodsInformation: () => Promise<MethodInformationEntity[]>
}

export interface PaulDataRepository {
  getContactInformation: ContactInformationRepository
  getMainInformation: MainInformationRepository
  getMethodsInformation: MethodsInformationRepository
}

export const PaulDataBuilder: (repository: PaulDataRepository) => PaulDataSelectors = (
  repository: PaulDataRepository
) => ({
  getMainInformation: async () => await MainInformationBuilder(repository.getMainInformation),
  getContactInformation: async () => await ContactInformationBuilder(repository.getContactInformation),
  getMethodsInformation: async (): Promise<MethodInformationEntity[]> => await MethodsInformationBuilder(repository.getMethodsInformation)
})
