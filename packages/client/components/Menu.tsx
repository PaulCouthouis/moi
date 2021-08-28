import { x } from '@xstyled/styled-components'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import profilePhoto from '../public/me.jpeg'

const Link = styled.a`
    display: block;
    padding: 10px 0;
    border-bottom: 1px solid #333;

    font-size: 14px;
    line-height: 1.85em;
    text-align: center;
    text-decoration: none;
    color: #f5f5f5;
`

export const Menu: React.FC<{ mainLabel: string }> = ({ mainLabel }) => {
  const [opened, setOpened] = useState(false)

  const handleMenuIconClick = useCallback(() => {
    setOpened(!opened)
  }, [opened])

  return (
    <x.nav position='fixed' w='100vw' zIndex='2' bg='#222' marginTop='-50px'>
      <x.header h='50px' p='0 20px' display='flex' alignItems='center' justifyContent='space-between' borderBottom='1px solid #444'>
        <x.div display='flex' alignItems='center'>
          <x.div h='34px' w='34px' overflowY='hidden'>
            <Image
              src={profilePhoto} alt='Photo de profile'
            />
          </x.div>
          <x.p marginLeft='8px' fontSize='18px' fontWeight={600}>{mainLabel}</x.p>
        </x.div>
        <x.button bg='#222' color='#fff' outline={{ focus: 'none' }} onClick={handleMenuIconClick}>
          <x.span className='lnr lnr-menu' fontSize='24px' fontWeight={900} />
        </x.button>
      </x.header>

      {opened &&
        <x.ul h='100vh' w='100vw' zIndex='2' bg='#222'>
          <li>
            <Link href='#' onClick={handleMenuIconClick}>A propos de moi</Link>
          </li>
          <li>
            <Link href='#method' onClick={handleMenuIconClick}>Ma méthodologie</Link>
          </li>
          <li>
            <Link href='#profile' onClick={handleMenuIconClick}>Profil</Link>
          </li>
          <li>
            <Link href='#contact' onClick={handleMenuIconClick}>Contact</Link>
          </li>
        </x.ul>}
    </x.nav>
  )
}
