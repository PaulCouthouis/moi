import { x } from '@xstyled/styled-components'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
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
  const [openedOnMobile, setOpenedOnMobile] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  const opened = useMemo(() => {
    return windowWidth >= 1024 ? true : openedOnMobile
  }, [openedOnMobile, windowWidth])

  const handleMenuIconClick = useCallback(() => {
    setOpenedOnMobile(!openedOnMobile)
  }, [openedOnMobile])

  useEffect(() => {
    window.addEventListener('load', function () {
      setWindowWidth(window.innerWidth)
    })

    window.addEventListener('resize', function () {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  return (
    <x.nav position='fixed' w={{ _: '100vw', lg: '160px' }} zIndex='2' bg='#222' marginTop={{ _: '-50px', lg: 0 }}>
      <x.header h={{ _: '50px', lg: '200px' }} p={{ _: '0 20px', lg: '20px' }} display={{ _: 'flex', lg: 'inherit' }} alignItems='center' justifyContent='space-between' borderBottom='1px solid #444'>
        <x.div display='flex' h='100%' flexDirection={{ lg: 'column' }} justifyContent={{ lg: 'space-around' }} alignItems='center'>
          <x.div h={{ _: '34px', lg: '80px' }} w={{ _: '34px', lg: '80px' }} overflowY='hidden'>
            <Image
              src={profilePhoto} alt='Photo de profile'
            />
          </x.div>
          <x.p marginLeft={{ _: '8px', lg: '0' }} fontSize={{ _: '18px', lg: '24px' }} fontWeight={600} textAlign='center'>{mainLabel}</x.p>
        </x.div>
        <x.button display={{ lg: 'none' }} bg='#222' color='#fff' outline={{ focus: 'none' }} onClick={handleMenuIconClick}>
          <x.span className='lnr lnr-menu' fontSize='24px' fontWeight={900} />
        </x.button>
      </x.header>

      {opened &&
        <x.ul h='100vh' w={{ _: '100vw', lg: '160px' }} zIndex='2' bg='#222'>
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
