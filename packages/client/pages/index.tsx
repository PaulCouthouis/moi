import Head from 'next/head'
import { MainInformationEntity, PaulDataBuilder, PaulDataInMemory } from '@frontend/core/'
import { MainInformation } from '../components/MainInformation/MainInformation'

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

      <MainInformation mainInformation={mainInformation} />
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
