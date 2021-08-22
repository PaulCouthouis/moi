import { ContactInformationBuilder, ContactInformationEntity, ContactInformationRepository } from './builders/ContactInformation'
import { MainInformationBuilder, MainInformationEntity, MainInformationRepository } from './builders/MainInformation'
import { MethodsInformationBuilder, MethodInformationEntity, MethodsInformationRepository } from './builders/MethodsInformation'
import { TechnicalSkillsBuilder, TechnicalSkillsEntity, TechnicalSkillsRepository } from './builders/TechnicalSkills'

interface PaulDataSelectors {
  getMainInformation: () => Promise<MainInformationEntity>
  getMethodsInformation: () => Promise<MethodInformationEntity[]>
  getTechnicalSkills: () => Promise<TechnicalSkillsEntity[]>
  getContactInformation: () => Promise<ContactInformationEntity>
}

export interface PaulDataRepository {
  getMainInformation: MainInformationRepository
  getMethodsInformation: MethodsInformationRepository
  getTechnicalSkills: TechnicalSkillsRepository
  getContactInformation: ContactInformationRepository
}

export const PaulDataBuilder: (repository: PaulDataRepository) => PaulDataSelectors = (
  repository: PaulDataRepository
) => ({
  getMainInformation: async () => await MainInformationBuilder(repository.getMainInformation),
  getContactInformation: async () => await ContactInformationBuilder(repository.getContactInformation),
  getMethodsInformation: async () => await MethodsInformationBuilder(repository.getMethodsInformation),
  getTechnicalSkills: async () => await TechnicalSkillsBuilder(repository.getTechnicalSkills)
})
