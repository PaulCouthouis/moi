import Head from 'next/head'
import { PaulDataBuilder, PaulDataInMemory } from '@frontend/core/'
import { MainInformation, MainInformationSerializeResult } from '../components/MainInformation'
import { ProfilePhoto } from '../components/ProfilePhoto'
import { x } from '@xstyled/styled-components'
import { serialize } from 'next-mdx-remote/serialize'

function Home ({ mainInformation }: {
  mainInformation: MainInformationSerializeResult
}): JSX.Element {
  const { firstName, lastName, job } = mainInformation
  return (
    <>
      <Head>
        <title>{firstName} {lastName} - {job}</title>
        <meta name='description' content='Freelancer expert dans son domaine, prise de contact possible si intéressé' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <x.section display={{ sm: 'flex' }} bg='#333'>
        <ProfilePhoto />
        <MainInformation mainInformation={mainInformation} />
      </x.section>
    </>
  )
}

export async function getStaticProps (): Promise<{
  props: {
    mainInformation: MainInformationSerializeResult
  }
}> {
  const paulDataSelectors = PaulDataBuilder(PaulDataInMemory())
  const mainInformation = await paulDataSelectors.getMainInformation()
  console.log(await serialize(mainInformation.description))

  return {
    props: {
      mainInformation: {
        ...mainInformation,
        description: await serialize(mainInformation.description)
      }
    }
  }
}

export default Home
