import tokens from '../../../../core/tokens'
import { Typography } from '../../../../core/typography'
import * as S from './styled'


export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success' | 'info'

type Props = {
    onClick: () => void
    text: string
    color?: ButtonColor
    width?: 'fit-content' | '100%'
    variant?: 'filled' | 'outlined'
    rounded?: boolean
}

const Button: React.FC<Props> = ({
    onClick,
    text,
    color = 'primary',
    width = 'fit-content',
    variant = 'filled',
    rounded = false,
}) => {
    return (
        <S.ButtonContainer
            rounded={rounded}
            onClick={onClick}
            color={color}
            width={width}
            variant={variant}
        >
            <Typography.BodyBase  style={{ margin: tokens.margin.ZERO }}>
                {text}
            </Typography.BodyBase>
        </S.ButtonContainer>
    )
}

export default Button
