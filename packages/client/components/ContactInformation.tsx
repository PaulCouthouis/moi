import { ContactInformationEntity } from '@frontend/core'
import { x } from '@xstyled/styled-components'
import React from 'react'
import { SectionTitle } from './shared/SectionTitle'

export interface ContactInformationSerializeResult extends Omit<ContactInformationEntity, 'dateAvailable'> {
  dateAvailable: string
}

const IconLabelBlock: React.FC<{label: string, icon: string}> = ({ label, icon }) => {
  return (
    <x.div
      bg='#333'
      marginBottom='30px'
      p='20px 10px 15px'
      border='1px solid #444'
      display='flex'
      flexDirection='column'
      alignItems='center'
      w={{ _: '100%', md: '48%', xl: '24%' }}
    >
      <x.span className={`lnr ${icon}`} fontSize={40} color='#b5b5b5' />
      <x.p m='13px 0' fontSize={16} fontWeight={600} lineHeight='1.5em'>{label}</x.p>
    </x.div>
  )
}

export const ContactInformation: React.FC<{ contactInformation: ContactInformationSerializeResult}> = ({ contactInformation }) => {
  const { mainPhone, mainCity, mail, dateAvailable } = contactInformation
  return (
    <x.address id='contact' bg='#222' p='25px 30px 60px' marginTop='10px'>
      <SectionTitle>Contact</SectionTitle>
      <x.div display='flex' flexDirection={{ _: 'column', md: 'row' }} flexWrap='wrap' justifyContent='space-between'>
        <IconLabelBlock label={mail} icon='lnr-envelope' />
        <IconLabelBlock label={mainPhone} icon='lnr-smartphone' />
        <IconLabelBlock label={mainCity} icon='lnr-map-marker' />
        <IconLabelBlock label={`Disponible le ${new Date(dateAvailable).toLocaleDateString('fr-FR')}`} icon='lnr-power-switch' />
      </x.div>
    </x.address>
  )
}
