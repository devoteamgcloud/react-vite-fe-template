import type { FC } from 'react'
import * as S from './styled'
import { MdAdd } from 'react-icons/md'

export type FabBgColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
export type FabTextColor = 'primary' | 'secondary'
export type Fabsize = 'small' | 'medium' | 'large'

type Props = {
  onClick: () => void
  bgColor?: FabBgColor
  textColor?: FabTextColor
  size?: Fabsize
  position?: 'absolute' | 'fixed' | 'relative'
  bottom?: number
  right?: number
  top?: number
  left?: number
  zIndex?: number
}

const Fab: FC<Props> = ({
  onClick,
  bgColor = 'primary',
  textColor = 'secondary',
  size = 'medium',
  ...positioning
}) => {
  return (
    <S.Container
      onClick={onClick}
      bgColor={bgColor}
      textColor={textColor}
      size={size}
      {...positioning}
      aria-label="Floating Action Button"
    >
      <MdAdd />
    </S.Container>
  )
}

export default Fab
