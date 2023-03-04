import styled, { css } from 'styled-components'

import SelectBox from 'components/SelectBox'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 49rem;
  width: 51rem;
  position: relative;
  background: white;
  border-radius: 0.8rem;

  > :first-child {
    border-radius: 0.8rem 0.8rem 0 0;
  }
`

export const LoadingOpacity = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.gray100};
    align-items: center;
    padding-block: 3rem 2rem;
    padding-inline: 2.3rem;
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const HostWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.small};
  `}
`

export const HostSelect = styled(SelectBox)`
  ${({ theme }) => css`
    .selectbox-trigger {
      font-weight: 700;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const HostHeadline = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray700};
    margin-top: 0.5rem;
  `}
`

export const ScheduleSection = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-inline: 1.6rem;
    padding-inline: ${theme.spacings.large};
  `}
`

export const Divisor = styled.div`
  ${({ theme }) => css`
    border-top: ${theme.colors.gray200} 1px solid;
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Blankslate = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    > span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray700};
      margin-top: -${theme.spacings.xxxlarge};
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    padding-inline: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};
  `}
`
