import tokens from '../../../../core/tokens'
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
  width?: 'fit-content' | '100%'
  variant?: 'filled' | 'outlined'
  edgy?: boolean
  size?: 'small' | 'medium' | 'large'
}

const Button: React.FC<Props> = ({
  onClick,
  text,
  color = 'primary',
  width = 'fit-content',
  variant = 'filled',
  edgy = false,
  size = 'medium',
}) => {
  return (
    <S.ButtonContainer
      onClick={onClick}
      color={color}
      width={width}
      variant={variant}
      edgy={edgy}
      size={size}
    >
      <Typography.BodyBase style={{ margin: tokens.margin.ZERO }}>
        {text}
      </Typography.BodyBase>
    </S.ButtonContainer>
  )
}

export default Button
