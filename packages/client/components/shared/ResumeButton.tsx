import { x } from '@xstyled/styled-components'

export const ResumeButton: React.FC = ({ children }) => {
  return (
    <x.a
      href='https://drive.google.com/file/d/1pJKHQ54QYnRS4p8uWf2LaOsALSNy3jFs/view?usp=sharing'
      display='inline-block'
      border='2px solid #0099e5'
      p='11px 28px'
      marginTop={30}
      textDecoration='none'
      textAlign='center'
      color='#fff'
      bg={{ hover: '#0099e5' }}
      transition='all 0.3s ease-in-out'
      target='_blank'
    >
      {children}
    </x.a>
  )
}
