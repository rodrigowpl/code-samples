import React from 'react'
import Image from 'next/image'

import * as S from './styles'

export type AvatarProps = {
  rounded?: boolean
  size?: number
}

type Props = AvatarProps & {
  src?: string
  fallback?: string
}

const Avatar = ({
  src,
  rounded = true,
  size = 48,
  fallback = '/img/avatar.png'
}: Props) => {
  return (
    <S.Container rounded={rounded} size={size}>
      <Image
        src={src || fallback}
        alt="User Avatar"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        quality={80}
      />
    </S.Container>
  )
}

export default Avatar
