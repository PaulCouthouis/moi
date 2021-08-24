import { SkillEntity, TechnicalSkillsEntity } from '@frontend/core/src'
import { x } from '@xstyled/styled-components'
import { SectionTitle } from './shared/SectionTitle'

export const ResumeInformation: React.FC<{
  technicalSkills: TechnicalSkillsEntity[]
}> = ({ technicalSkills }) => {
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
      <x.h3
        display='inline-block'
        marginBottom='15px'
        paddingBottom='3px'
        fontSize={17}
        fontWeight={600}
        borderBottom='2px solid #0099e5'
      >
        {title}
      </x.h3>
      {skillItem(skills)}
    </x.article>
  )

  return (
    <x.div bg='#222' p='25px 30px 60px' marginTop='10px'>
      <SectionTitle>Profil</SectionTitle>
      <x.div maxWidth='600px'>
        {skillsItems}
      </x.div>
    </x.div>
  )
}
