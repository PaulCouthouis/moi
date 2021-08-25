import { Builder, DataBuilder, Repository } from './_builder'

export interface ExperiencesEntity {
  title: string
  startDate: string
  endDate: string
  company: string
  description: string
}

export type ExperiencesRepository = Repository<ExperiencesEntity[]>
export const ExperiencesBuilder: Builder<ExperiencesRepository, ExperiencesEntity[]> = DataBuilder
