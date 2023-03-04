import styled, { css } from 'styled-components'
import * as SelectPrimitive from '@radix-ui/react-select'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray700};
    margin-bottom: 0.4rem;
    display: block;
  `}
`

export const Container = styled.div``

export const Trigger = styled(SelectPrimitive.SelectTrigger)`
  ${({ theme }) => css`
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4;
    font-size: ${theme.font.sizes.xsmall};
    background-color: transparent;
    color: ${theme.colors.primary400};
    font-weight: 400;
    letter-spacing: 0.05em;

    > span > svg {
      margin-left: 6px;
    }

    &:hover {
      cursor: pointer;
    }

    &[data-placeholder] {
      color: ${theme.colors.gray700};
    }
  `}
`

export const Content = styled(SelectPrimitive.SelectContent)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  z-index: 10;
`

export const ViewPort = styled(SelectPrimitive.SelectViewport)`
  padding: 5px;
`

export const Item = styled(SelectPrimitive.Item)`
  ${({ theme }) => css`
    all: unset;
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1px;
    color: ${theme.colors.black};
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 35px;
    padding: 0 35px 0 25px;
    position: relative;
    user-select: none;

    &[data-disabled] {
      color: ${theme.colors.gray700};
      pointer-events: none;
    }

    &[data-highlighted] {
      background-color: ${theme.colors.primary400};
      color: ${theme.colors.white};
    }
  `}
`

export const ItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const ScrollButton = css`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background-color: white;
    color: ${theme.colors.primary400};
    cursor: default;
  `}
`

export const ScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  ${ScrollButton}
`

export const ScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  ${ScrollButton}
`
