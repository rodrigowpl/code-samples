import styled, { css } from 'styled-components'

import { ButtonVariants } from './index'

type Props = {
  variant: ButtonVariants
  width?: string
  height?: string
}

export const Text = styled.span`
  ${({ theme }) => css`
    font-weight: 500;
    color: ${theme.colors.white400};
    font-size: ${theme.font.sizes.medium};
  `}
`

const getVariantStyles = ({ variant }: Props) => {
  switch (variant) {
    case 'primary':
      return css`
        background: ${({ theme }) => theme.colors.primary400};
      `

    case 'primary-light':
      return css`
        background: ${({ theme }) => theme.colors.primary100};

        ${Text} {
          color: ${({ theme }) => theme.colors.primary};
        }
      `

    case 'primary-outline':
      return css`
        border: 1px solid ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.white};

        ${Text} {
          color: ${({ theme }) => theme.colors.primary};
        }
      `
    case 'danger':
      return css`
        background-color: ${({ theme }) => theme.colors.red900};

        ${Text} {
          color: ${({ theme }) => theme.colors.white};
        }
      `

    case 'warning':
      return css`
        background-color: ${({ theme }) => theme.colors.orange};

        ${Text} {
          color: ${({ theme }) => theme.colors.white};
        }
      `

    case 'outline':
      return css`
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.green900};

        ${Text} {
          color: ${({ theme }) => theme.colors.green900};
        }
      `

    case 'warning-light':
      return css`
        border-radius: 0 4px 4px 0;
        background-color: ${({ theme }) => theme.colors.yellow900};
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        height: 3.5rem;

        ${Text} {
          color: ${({ theme }) => theme.colors.yellow800};
          font-weight: 400;
        }
      `

    default:
      return css`
        background-color: ${({ theme }) => theme.colors.gray125};

        ${Text} {
          color: ${({ theme }) => theme.colors.green900};
        }
      `
  }
}

export const Button = styled.button<Props>`
  ${({ variant, width, height }) => css`
    height: ${height || '4.5rem'};
    border: none;
    border-radius: 0.4rem;
    padding: 0.5rem 2rem;
    ${width &&
    css`
      width: ${width};
    `}

    ${getVariantStyles({ variant })}

    &:hover {
      cursor: pointer;
    }

    :disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`
