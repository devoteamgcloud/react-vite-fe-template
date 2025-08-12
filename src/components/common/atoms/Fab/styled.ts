import styled from '@emotion/styled'
import type { FabBgColor, Fabsize, FabPlacement } from './Fab'
import type { FabTextColor } from './Fab'
import tokens from '../../../../core/tokens'

export const Container = styled.div<{
  $bgColor: FabBgColor
  $textColor: FabTextColor
  $size: Fabsize
  $placement: FabPlacement
}>(({ theme, $bgColor, $textColor, $size, $placement }) => {
  const pos = $placement || 'bottom-right'
  return {
    position: 'fixed',
    ...(pos.includes('top') ? { top: 16 } : { bottom: 16 }),
    ...(pos.includes('right') ? { right: 16 } : { left: 16 }),

    backgroundColor: theme.colors[$bgColor],
    color: theme.colors.text[$textColor],
    width: tokens.fabSize[$size],
    height: tokens.fabSize[$size],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: tokens.borderRadius.ROUND,
    cursor: 'pointer',
    boxShadow: theme.colors.boxShadow,
    padding: tokens.padding.ZERO,
    fontWeight: tokens.text.fontWeight.semiBold,
    lineHeight: 0,
    zIndex: 1000,

    svg: {
      width: tokens.size.LARGE,
      height: tokens.size.LARGE,
    },

    '&:focus, &:focus-visible': {
      outline: 'none !important',
      boxShadow: 'none !important',
    },
  }
})
