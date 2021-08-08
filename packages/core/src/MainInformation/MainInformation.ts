export interface MainInformationEntity {
  firstName: string
  lastName: string
  job: string
  description: string
}
export type MainInformationRepository = () => Promise<MainInformationEntity>
export const MainInformationBuilder: (repository: MainInformationRepository) => Promise<MainInformationEntity> =
  async (repisitory: MainInformationRepository) => await repisitory()
