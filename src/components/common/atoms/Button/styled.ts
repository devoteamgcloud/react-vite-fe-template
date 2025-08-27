import styled from '@emotion/styled'
import type { ButtonColor } from './Button'
import tokens from '../../../../core/tokens'

const sizePadding = {
  small: `${tokens.padding.BASELINE * 1}px ${tokens.padding.BASELINE * 2}px`,
  medium: `${tokens.padding.BASELINE * 2}px ${tokens.padding.BASELINE * 3}px`,
  large: `${tokens.padding.BASELINE * 2.5}px ${tokens.padding.BASELINE * 4}px`,
}

export const ButtonContainer = styled.button<{
  color: ButtonColor
  width?: number
  fullWidth?: boolean
  variant: 'filled' | 'outlined'
  rounded?: boolean
  fontWeight?: string
  size?: 'small' | 'medium' | 'large'
}>`
  width: ${({ fullWidth, width }) =>
    fullWidth ? '100%' : width ? `${width}px` : 'auto'};
  flex: ${({ fullWidth }) => (fullWidth ? '1 1 auto' : '0 0 auto')};
  min-width: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ fontWeight }) => fontWeight ?? '600'};
  border: none;
  border-radius: ${({ rounded }) =>
    rounded ? tokens.borderRadius.ROUND : tokens.borderRadius.BASELINE}px;
  padding: ${({ size }) => sizePadding[size ?? 'medium']};
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  height: fit-content;

  ${({ variant, color, theme }) => {
    const style = theme.buttonStyles[color]?.[variant]
    if (!style) {
      return `
        background: gray;
        color: white;
        border: none;
      `
    }

    return `
      background-color: ${style.background};
      color: ${style.text};
      box-shadow: ${style.border};
      &:hover {
        background: ${style.hover?.background ?? style.background};
        color: ${style.hover?.text ?? style.text};
      }
    `
  }}
`
