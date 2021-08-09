import { MainInformationEntity } from '@frontend/core'
import { x } from '@xstyled/styled-components'

export const MainInformation: React.FC<{ mainInformation: MainInformationEntity }> = (
  { mainInformation: { firstName, lastName, job, description } }
) => {
  return (
    <x.article bg='#333' p='30px 30px 50px' fontFamily='Poppins, Helvetica, sans-serif' fontSize={14} lineHeight='1.85em'>
      <x.header color='#a5a5a5' fontWeight={300}>
        {job}
      </x.header>

      <x.h1 color='#f5f5f5' fontSize={36} fontWeight={600} lineHeight='1.2em' m='0 0 15px 0'>{firstName} {lastName}</x.h1>
      <x.p color='#d5d5d5'> {description} </x.p>
    </x.article>
  )
}