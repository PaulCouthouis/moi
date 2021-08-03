import { Builder } from './builder.type'
import { MainInformationBuilder } from './MainInformation/MainInformation'

interface PaulData {
  getMainInformation: typeof MainInformationBuilder
}

export const PaulDataBuilder: Builder<PaulData> = () => ({
  getMainInformation: MainInformationBuilder
})
