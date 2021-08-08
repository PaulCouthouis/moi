import { Builder } from '../builder.type'

export interface MainInformationEntity {
  firstName: string
  lastName: string
  job: string
  description: string
}

const mainInformation = {
  firstName: 'Paul',
  lastName: 'Couthouis',
  job: 'Développeur Front-End',
  description: 'Anim do consequat exercitation culpa irure non nulla nisi ad excepteur id labore nostrud. Occaecat nisi dolore labore eu consectetur Lorem exercitation culpa cupidatat elit enim. Ex dolore officia elit sit et in laborum incididunt aliqua. Veniam qui ea nostrud officia dolor.'
}

export const MainInformationBuilder: Builder<MainInformationEntity> = () => mainInformation
