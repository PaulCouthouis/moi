import Head from 'next/head'
import { PaulDataBuilder } from '@frontend/core/'
import { MainInformation } from '../components/MainInformation/MainInformation'

export default function Home (): JSX.Element {
  const mainInformation = PaulDataBuilder().getMainInformation()
  const { firstName, lastName, description, job } = mainInformation
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
