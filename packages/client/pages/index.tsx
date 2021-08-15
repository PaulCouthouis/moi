import Head from 'next/head'
import { PaulDataBuilder, PaulDataInMemory } from '@frontend/core/'
import { MainInformation, MainInformationSerializeResult } from '../components/MainInformation'
import { ProfilePhoto } from '../components/ProfilePhoto'
import { x } from '@xstyled/styled-components'
import { serialize } from 'next-mdx-remote/serialize'
import { ContactInformation, ContactInformationSerializeResult } from '../components/ContactInformation'

interface HomeProps {
  mainInformation: MainInformationSerializeResult
  contactInformation: ContactInformationSerializeResult
}

function Home ({ mainInformation, contactInformation }: HomeProps): JSX.Element {
  const { firstName, lastName, job } = mainInformation
  return (
    <x.span
      color='#f5f5f5'
      fontFamily='Poppins, Helvetica, sans-serif'
    >
      <Head>
        <title>{firstName} {lastName} - {job}</title>
        <meta name='description' content='Freelancer expert dans son domaine, prise de contact possible si intéressé' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <x.section
        display={{ sm: 'flex' }} bg='#333' maxHeight={{ lg: '450px', xl: '665px' }}
      >
        <ProfilePhoto />
        <MainInformation mainInformation={mainInformation} />
      </x.section>
      <ContactInformation contactInformation={contactInformation} />
    </x.span>
  )
}

export async function getStaticProps (): Promise<{
  props: HomeProps
}> {
  const paulDataSelectors = PaulDataBuilder(PaulDataInMemory())
  const mainInformation = await paulDataSelectors.getMainInformation()
  const contactInformation = await paulDataSelectors.getContactInformation()

  return {
    props: {
      mainInformation: {
        ...mainInformation,
        description: await serialize(mainInformation.description)
      },
      contactInformation: {
        ...contactInformation,
        dateAvailable: contactInformation.dateAvailable.toISOString()
      }
    }
  }
}

export default Home
