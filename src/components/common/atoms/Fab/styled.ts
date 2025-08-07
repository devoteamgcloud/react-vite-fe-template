import styled from '@emotion/styled'
import type { FabBgColor, Fabsize } from './Fab'
import type { FabTextColor } from './Fab'
import tokens from '../../../../core/tokens'

export const Container = styled.button<{
  bgColor: FabBgColor
  textColor: FabTextColor
  size: Fabsize
  position?: 'absolute' | 'fixed' | 'relative'
  bottom?: number
  right?: number
  top?: number
  left?: number
  zIndex?: number
}>(
  ({
    theme,
    bgColor,
    textColor,
    size,
    position,
    bottom,
    right,
    top,
    left,
    zIndex,
  }) => ({
    position: position ?? 'fixed',
    bottom: bottom ?? 'auto',
    right: right ?? 'auto',
    top: top ?? tokens.padding.CONTAINER,
    left: left ?? tokens.padding.CONTAINER,
    zIndex: zIndex ?? 1000,
    backgroundColor: theme.colors[bgColor],
    color: theme.colors.text[textColor],
    width: tokens.fabSize[size],
    height: tokens.fabSize[size],
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

    svg: {
      width: tokens.size.LARGE,
      height: tokens.size.LARGE,
    },

    '&:focus, &:focus-visible': {
      outline: 'none !important',
      boxShadow: 'none !important',
    },
  })
)
