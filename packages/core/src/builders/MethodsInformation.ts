import { Builder, DataBuilder, Repository } from './_builder'

export interface MethodInformationEntity {
  title: string
  description: string
}

export type MethodsInformationRepository = Repository<MethodInformationEntity[]>
export const MethodsInformationBuilder: Builder<MethodsInformationRepository, MethodInformationEntity[]> = DataBuilder
