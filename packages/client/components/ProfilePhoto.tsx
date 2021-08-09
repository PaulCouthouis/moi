import { x } from '@xstyled/styled-components'
import React from 'react'
import Image from 'next/image'
import profilePhoto from '../public/me.jpeg'

export const ProfilePhoto: React.FC = () => {
  return (
    <x.div h={{ _: 300, xs: 400, sm: 'inherit' }} overflowY='hidden'>
      <Image src={profilePhoto} alt='Photo de profile' />
    </x.div>
  )
}
