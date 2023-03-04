import styled, { css } from 'styled-components'

import { AvatarProps } from '.'

export const Container = styled.div<AvatarProps>`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;
  border-radius: 4px;
  overflow: hidden;

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
    `}
`
