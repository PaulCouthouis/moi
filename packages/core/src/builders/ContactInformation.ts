import { Builder, DataBuilder, Repository } from './_builder'

export interface ContactInformationEntity {
  mainPhone: string
  secondPhone: string
  mainCity: string
  secondCity: string
  mail: string
  dateAvailable: Date
  isAvailable: false
}

export type ContactInformationRepository = Repository<ContactInformationEntity>
export const ContactInformationBuilder: Builder<ContactInformationRepository, ContactInformationEntity> = DataBuilder
