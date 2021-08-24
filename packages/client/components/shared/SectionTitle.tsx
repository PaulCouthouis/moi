import { x } from '@xstyled/styled-components'

export const SectionTitle: React.FC = ({ children }) => {
  return (
    <x.h2
      marginBottom='40px'
      paddingBottom='5px'
      borderBottom='2px solid #666'
      fontSize={30}
      fontWeight={600}
      fontStyle='normal'
    >
      {children}
    </x.h2>
  )
}
