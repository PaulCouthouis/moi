import { MethodInformationEntity } from '@frontend/core/src'
import { x } from '@xstyled/styled-components'

export const MethodsInformation: React.FC<{
  methodsInformation: MethodInformationEntity[]
}> = ({ methodsInformation }) => {
  const articleItems = methodsInformation.map(({ title, description }, i) => (
    <x.article key={i}>
      <x.h3>{title}</x.h3>
      <x.p>{description}</x.p>
    </x.article>
  ))

  return (
    <x.section bg='#222' p='40px 30px 60px'>
      <x.h2 display='inline-block' marginBottom='20px' paddingBottom='3px' fontSize={21} fontWeight={600} borderBottom='2px solid #0099e5'>Ma Méthodologie</x.h2>
      {articleItems}
    </x.section>
  )
}
