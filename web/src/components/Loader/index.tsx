import Image from 'next/image'

import * as S from './styles'

const defaultSize = {
  width: 40,
  height: 10
}

type Props = {
  inverted?: boolean
  size?: Partial<{
    width: number
    height: number
  }>
  className?: string
}

const Loader = ({ inverted, size = defaultSize, className }: Props) => (
  <S.Wrapper className={className}>
    <Image
      src={`/img/dots-${inverted ? 'blue' : 'white'}.svg`}
      width={size.width}
      height={size.height}
      priority
      unoptimized
      alt="dots"
    />
  </S.Wrapper>
)

export const SmallLoader = ({ inverted }: Props) => (
  <Loader
    inverted={inverted}
    size={{
      width: 25,
      height: 7
    }}
  />
)

export default Loader
