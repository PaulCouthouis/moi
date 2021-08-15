import { MainInformationEntity } from '@frontend/core'
import styled, { x } from '@xstyled/styled-components'
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types'
import { MDXRemote } from 'next-mdx-remote'

export interface MainInformationSerializeResult extends Omit<MainInformationEntity, 'description'> {
  description: MDXRemoteSerializeResult
}

const Description = styled.div`
  width: 65ch;
  max-width: 100%;
  color: #d5d5d5;

  p {
    margin-bottom: 10px;
  }
`

export const MainInformation: React.FC<{ mainInformation: MainInformationSerializeResult }> = (
  { mainInformation: { firstName, lastName, job, description } }
) => {
  return (
    <x.article
      w={{ sm: '65%' }}
      display='flex'
      alignItems='center'
      justifyContent='center'
      p='30px 30px 50px'
      fontSize={14}
      lineHeight='1.85em'
    >
      <x.div maxWidth='100%'>
        <x.header fontWeight={300}>
          {job}
        </x.header>
        <x.h1 fontSize={36} fontWeight={600} lineHeight='1.2em' m='0 0 15px 0'>{firstName} {lastName}</x.h1>
        <Description> <MDXRemote {...description} /> </Description>

        <x.a
          href='https://drive.google.com/file/d/1pJKHQ54QYnRS4p8uWf2LaOsALSNy3jFs/view?usp=sharing'
          display='inline-block'
          border='2px solid #0099e5'
          p='11px 28px'
          marginTop={30}
          textDecoration='none'
          color='#fff'
          bg={{ hover: '#0099e5' }}
          transition='all 0.3s ease-in-out'
          target='_blank'
        >
          Télécharger mon CV
        </x.a>
      </x.div>
    </x.article>
  )
}
