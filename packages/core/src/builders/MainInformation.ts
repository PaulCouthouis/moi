import { Builder, DataBuilder, Repository } from './_builder'

export interface MainInformationEntity {
  firstName: string
  lastName: string
  job: string
  description: string
}

export type MainInformationRepository = Repository<MainInformationEntity>
export const MainInformationBuilder: Builder<MainInformationRepository, MainInformationEntity> = DataBuilder
