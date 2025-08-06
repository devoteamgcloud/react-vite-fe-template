import styled from '@emotion/styled'
import type { ButtonColor } from './Button'
import tokens from '../../../../core/tokens'

export const ButtonContainer = styled.button<{
    color: ButtonColor
    width?: string
    variant: 'filled' | 'outlined'
}>`
    width: ${({ width }) => width ?? 'fit-content'};
    min-width: 90px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    border: none;
    border-radius: ${tokens.borderRadius.ROUND}px;
    padding: ${tokens.padding.BASELINE * 2}px ${tokens.padding.BASELINE * 3}px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    transition: background-color 0.2s ease;

    ${({ variant, color, theme }) => {
        const style = theme.buttonStyles[color][variant]
        return `
      background-color: ${style.background};
      color: ${style.text};
      box-shadow: ${style.border};
  
      &:hover {
        background-color: ${style.hover};
      }
    `
    }}
`
