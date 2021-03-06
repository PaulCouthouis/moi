import { MethodInformationEntity } from '@frontend/core'
import { x } from '@xstyled/styled-components'
import { SectionTitle } from './shared/SectionTitle'

export const MethodsInformation: React.FC<{
  methodsInformation: MethodInformationEntity[]
}> = ({ methodsInformation }) => {
  const articleItems = methodsInformation.map(({ title, icon, description }, i) => (
    <x.article key={i} maxWidth={{ md: 'calc(50% - 10px)', '2xl': 'calc(25% - 10px)' }} m='10px 10px 10px 0' display='flex'>
      <x.div marginRight={25}>
        <x.span className={`lnr lnr-${icon}`} fontSize={40} color='#b5b5b5' />
      </x.div>
      <x.div>
        <x.h3 fontSize={{ _: 14, xxs: 18 }} fontWeight={600} lineHeight='40px'>{title}</x.h3>
        <x.p fontSize={12} lineHeight='1.85em' maxWidth='65ch'>{description}</x.p>
      </x.div>
    </x.article>
  ))

  return (
    <x.section id='method' bg='#222' p='40px 30px 60px'>
      <SectionTitle>Ma Méthodologie</SectionTitle>
      <x.div display='flex' flexWrap='wrap' justifyContent='space-around'>
        {articleItems}
      </x.div>
    </x.section>
  )
}
