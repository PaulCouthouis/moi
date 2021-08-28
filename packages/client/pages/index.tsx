import Head from 'next/head'
import { ExperiencesEntity, MethodInformationEntity, PaulDataBuilder, PaulDataInMemory, TechnicalSkillsEntity } from '@frontend/core/'
import { MainInformation, MainInformationSerializeResult } from '../components/MainInformation'
import { ProfilePhoto } from '../components/ProfilePhoto'
import { x } from '@xstyled/styled-components'
import { serialize } from 'next-mdx-remote/serialize'
import { ContactInformation, ContactInformationSerializeResult } from '../components/ContactInformation'
import { MethodsInformation } from '../components/MethodsInformation'
import { ResumeInformation } from '../components/ResumeInformation'
import { Menu } from '../components/Menu'

interface HomeProps {
  mainInformation: MainInformationSerializeResult
  methodsInformation: MethodInformationEntity[]
  experiences: ExperiencesEntity[]
  technicalSkills: TechnicalSkillsEntity[]
  contactInformation: ContactInformationSerializeResult
}

function Home ({
  mainInformation,
  methodsInformation,
  experiences,
  technicalSkills,
  contactInformation
}: HomeProps): JSX.Element {
  const { firstName, lastName, job } = mainInformation
  return (
    <x.div
      bg='#000'
      color='#f5f5f5'
      fontFamily='Poppins, Helvetica, sans-serif'
    >
      <Head>
        <title>{firstName} {lastName} - {job}</title>
        <meta name='description' content='Freelancer expert dans son domaine, prise de contact possible si intéressé' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Menu mainLabel={`${firstName} ${lastName}`} />
      <x.section
        display={{ sm: 'flex' }} bg='#333' maxHeight={{ lg: '450px', xl: '665px' }} marginTop='50px'
      >
        <ProfilePhoto />
        <MainInformation mainInformation={mainInformation} />
      </x.section>
      <MethodsInformation methodsInformation={methodsInformation} />
      <ResumeInformation experiences={experiences} technicalSkills={technicalSkills} />
      <ContactInformation contactInformation={contactInformation} />
    </x.div>
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
      methodsInformation: await paulDataSelectors.getMethodsInformation(),
      technicalSkills: await paulDataSelectors.getTechnicalSkills(),
      experiences: await paulDataSelectors.getExperiences(),
      contactInformation: {
        ...contactInformation,
        dateAvailable: contactInformation.dateAvailable.toISOString()
      }
    }
  }
}

export default Home
