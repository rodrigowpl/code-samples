import styled, { css } from 'styled-components'

type ScheduleProps = {
  selected?: boolean
  width?: number
}

export const Wrapper = styled.div<ScheduleProps>`
  ${({ theme, selected, width }) => css`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    border: 1px solid ${selected ? theme.colors.black : theme.colors.gray200};
    border-radius: 0.8rem;
    padding-inline: 0.4rem;
    padding-block: 1.4rem;

    ${width &&
    css`
      max-width: ${width}px;
    `}
  `}
`

export const ScheduleMainText = styled.span`
  ${({ theme }) => css`
    font-weight: 700;
    color: ${theme.colors.gray900};
    text-align: center;
    font-size: ${theme.font.sizes.medium};
  `}
`

export const ScheduleWeekday = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    color: ${theme.colors.gray900};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const ScheduleSlot = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: 700;
    color: ${theme.colors.red500};
    margin-top: ${theme.spacings.xxsmall};
  `}
`
