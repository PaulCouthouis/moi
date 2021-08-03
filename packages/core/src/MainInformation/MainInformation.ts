import { Builder } from '../builder.type'

interface MainInformation {
  firstName: string
  lastName: string
  job: string
  description: string
}

const mainInformation = {
  firstName: 'Paul',
  lastName: 'Couthouis',
  job: 'Développeur Front-End',
  description: 'xxx'
}

export const MainInformationBuilder: Builder<MainInformation> = () => mainInformation
