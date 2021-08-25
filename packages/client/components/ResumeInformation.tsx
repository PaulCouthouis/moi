import { ExperiencesEntity, SkillEntity, TechnicalSkillsEntity } from '@frontend/core/src'
import { x } from '@xstyled/styled-components'
import { SectionTitle } from './shared/SectionTitle'

const ArticleTitle: React.FC = ({ children }) => {
  return (
    <x.h3
      display='inline-block'
      marginBottom='15px'
      paddingBottom='3px'
      fontSize={17}
      fontWeight={600}
      borderBottom='2px solid #0099e5'
    >
      {children}
    </x.h3>
  )
}

export const ResumeInformation: React.FC<{
  technicalSkills: TechnicalSkillsEntity[]
  experiences: ExperiencesEntity[]
}> = ({ technicalSkills, experiences }) => {
  const skillItem = (skills: SkillEntity[]): JSX.Element[] =>
    skills.map(({ name, value }, i) =>
      <x.div key={i} marginBottom='10px'>
        <x.div display='flex' justifyContent='space-between' lineHeight='1.25em'>
          <x.p fontSize={13} fontWeight={600}>{name}</x.p>
          <x.p fontSize={11} color='#aaa'>{value}%</x.p>
        </x.div>
        <x.div h='10px' border='1px solid #0099e5' borderRadius='10px'>
          <x.div h='6px' m='1px' backgroundColor='#0099e5' borderRadius='6px' w={`${value}%`} />
        </x.div>
      </x.div>
    )

  const skillsItems = technicalSkills.map(({ title, skills }, i) =>
    <x.article key={i} w='100%' marginBottom='60px'>
      <ArticleTitle>{title}</ArticleTitle>
      {skillItem(skills)}
    </x.article>
  )

  const experienceItems = experiences.map(({ startDate, endDate, company, title, description }, i) =>
    <x.section key={i} marginBottom='25px'>
      <x.header>
        <x.p m='3px 0' fontSize='14px' fontWeight={600} lineHeight='1.4em'>
          <time>{startDate}</time> - <time>{endDate}</time>
        </x.p>
        <x.p marginBottom='4px' color='#aaa' fontSize='12px' lineHeight='1.45em' maxWidth='25ch'>{company}</x.p>
      </x.header>
      <x.main>
        <x.header marginBottom='3px' fontSize='16px' fontWeight={600} lineHeight='1.5em'> {title} </x.header>
        <x.p color='#d5d5d5' fontSize='12px' lineHeight='1.85em' maxWidth='65ch'>
          {description}
        </x.p>
      </x.main>
    </x.section>
  )

  return (
    <x.div bg='#222' p='25px 30px 60px' marginTop='10px'>
      <SectionTitle>Profil</SectionTitle>
      <x.main display='flex' flexWrap='wrap'>
        <x.article marginRight='30px'>
          <ArticleTitle>Expériences</ArticleTitle>
          {experienceItems}
        </x.article>
        <x.div flex='1' minWidth='170px' maxWidth='600px'>
          {skillsItems}
        </x.div>
      </x.main>
    </x.div>
  )
}
