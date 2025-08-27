import { Typography } from '../../../../core/typography'
import * as S from './styled'

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'info'

type Props = {
  onClick: () => void
  text: string
  color?: ButtonColor
  /** fixed width in px */
  width?: number
  /** fill parent container */
  fullWidth?: boolean
  variant?: 'filled' | 'outlined'
  rounded?: boolean
  size?: 'small' | 'medium' | 'large'
}

const Button: React.FC<Props> = ({
  onClick,
  text,
  color = 'primary',
  width,
  fullWidth = false,
  variant = 'filled',
  rounded = false,
  size = 'medium',
}) => {
  return (
    <S.ButtonContainer
      onClick={onClick}
      color={color}
      width={width}
      fullWidth={fullWidth}
      variant={variant}
      rounded={rounded}
      size={size}
    >
      <Typography.BodyBase>{text}</Typography.BodyBase>
    </S.ButtonContainer>
  )
}

export default Button
