import { ContactInformationBuilder, ContactInformationEntity, ContactInformationRepository } from './builders/ContactInformation'
import { ExperiencesBuilder, ExperiencesRepository } from './builders/Experiences'
import { MainInformationBuilder, MainInformationEntity, MainInformationRepository } from './builders/MainInformation'
import { MethodsInformationBuilder, MethodInformationEntity, MethodsInformationRepository } from './builders/MethodsInformation'
import { TechnicalSkillsBuilder, TechnicalSkillsEntity, TechnicalSkillsRepository } from './builders/TechnicalSkills'

interface PaulDataSelectors {
  getMainInformation: () => Promise<MainInformationEntity>
  getMethodsInformation: () => Promise<MethodInformationEntity[]>
  getTechnicalSkills: () => Promise<TechnicalSkillsEntity[]>
  getExperiences: () => Promise<any>
  getContactInformation: () => Promise<ContactInformationEntity>
}

export interface PaulDataRepository {
  getMainInformation: MainInformationRepository
  getMethodsInformation: MethodsInformationRepository
  getTechnicalSkills: TechnicalSkillsRepository
  getExperiences: ExperiencesRepository
  getContactInformation: ContactInformationRepository
}

export const PaulDataBuilder: (repository: PaulDataRepository) => PaulDataSelectors = (
  repository: PaulDataRepository
) => ({
  getMainInformation: async () => await MainInformationBuilder(repository.getMainInformation),
  getMethodsInformation: async () => await MethodsInformationBuilder(repository.getMethodsInformation),
  getTechnicalSkills: async () => await TechnicalSkillsBuilder(repository.getTechnicalSkills),
  getExperiences: async () => await ExperiencesBuilder(repository.getExperiences),
  getContactInformation: async () => await ContactInformationBuilder(repository.getContactInformation)
})
