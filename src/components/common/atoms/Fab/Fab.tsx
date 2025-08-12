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
export type Fabsize = 'sm' | 'md' | 'lg'
export type FabPlacement =
  | 'bottom-right'
  | 'bottom-left'
  | 'top-right'
  | 'top-left'

type Props = {
  onClick: () => void
  bgColor?: FabBgColor
  textColor?: FabTextColor
  size?: Fabsize
  placement?: FabPlacement
}

function Fab({
  onClick,
  bgColor = 'primary',
  textColor = 'secondary',
  size = 'md',
  placement = 'top-left',
}: Props) {
  return (
    <S.Container
      onClick={onClick}
      $bgColor={bgColor}
      $textColor={textColor}
      $size={size}
      $placement={placement}
      aria-label="Floating Action Button"
    >
      <MdAdd />
    </S.Container>
  )
}

export default Fab
