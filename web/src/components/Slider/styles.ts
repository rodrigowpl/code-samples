import styled, { css } from 'styled-components'

import 'swiper/css'
import 'swiper/css/navigation'

export const Wrapper = styled.div``

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray700};
  `}
`

export const SliderHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 3.8rem;
`

export const SliderItem = styled.div``

export const ArrowContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    height: 2.4rem;
    width: 2.4rem;

    &:hover {
      border: 1px solid ${theme.colors.gray200};
    }
  `}
`

export const Arrows = styled.div`
  display: flex;

  > :first-child {
    margin-right: 0.2rem;
  }
`
