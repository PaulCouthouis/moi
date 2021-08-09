import Head from 'next/head'
import { MainInformationEntity, PaulDataBuilder, PaulDataInMemory } from '@frontend/core/'
import { MainInformation } from '../components/MainInformation'
import { ProfilePhoto } from '../components/ProfilePhoto'
import { x } from '@xstyled/styled-components'

function Home ({ mainInformation }: {
  mainInformation: MainInformationEntity
}): JSX.Element {
  const { firstName, lastName, job, description } = mainInformation
  return (
    <>
      <Head>
        <title>{firstName} {lastName} - {job}</title>
        <meta name='description' content={description} />
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
    mainInformation: MainInformationEntity
  }
}> {
  const paulDataSelectors = PaulDataBuilder(PaulDataInMemory())
  return {
    props: {
      mainInformation: await paulDataSelectors.getMainInformation()
    }
  }
}

export default Home
