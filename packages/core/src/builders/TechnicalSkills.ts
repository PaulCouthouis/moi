import { Builder, DataBuilder, Repository } from './_builder'

interface SkillEntity {
  name: string
  value: number
}

export interface TechnicalSkillsEntity {
  title: string
  skills: SkillEntity[]
}

export type TechnicalSkillsRepository = Repository<TechnicalSkillsEntity[]>
export const TechnicalSkillsBuilder: Builder<TechnicalSkillsRepository, TechnicalSkillsEntity[]> = DataBuilder
