import Head from 'next/head'
import { PaulDataBuilder } from '@frontend/core/'

export default function Home (): JSX.Element {
  const { lastName } = PaulDataBuilder().getMainInformation()
  return (
    <>
      <Head>
        <title>Paul Couthouis - Développeur Front-End</title>
        <meta name='description' content='Paul Couthouis est un développeur front-end freelance disponible pour des missions' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>Salut {lastName} !</div>
    </>
  )
}
