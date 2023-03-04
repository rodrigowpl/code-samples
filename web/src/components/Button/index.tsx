import Loader from 'components/Loader'

import * as S from './styles'

export type ButtonVariants =
  | 'default'
  | 'primary'
  | 'primary-light'
  | 'primary-outline'
  | 'outline'
  | 'danger'
  | 'warning'
  | 'warning-light'

type Props = {
  text: string
  loading?: boolean
  variant?: ButtonVariants
  width?: string
  height?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  text,
  loading,
  variant = 'primary',
  width,
  height,
  type = 'button',
  disabled,
  ...rest
}: Props) => (
  <S.Button
    variant={variant}
    width={width}
    height={height}
    type={type}
    disabled={disabled || loading}
    {...rest}
  >
    {loading ? (
      <Loader
        inverted={
          variant === 'outline' ||
          variant === 'primary-outline' ||
          variant === 'primary-light'
        }
      />
    ) : (
      <S.Text>{text}</S.Text>
    )}
  </S.Button>
)

export default Button
