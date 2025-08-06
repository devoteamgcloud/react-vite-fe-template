import styled from '@emotion/styled'

import type { ButtonColor } from './Button'
import tokens from '../../../../core/tokens'

export const ButtonContainer = styled.button<{
    color: ButtonColor
    width?: string
    variant: 'filled' | 'outlined'
    rounded?: boolean
    fontWeight?: string

}>`
    width: ${({ width }) => width ?? 'fit-content'};
    min-width: 90px;
    display: flex;
    justify-content: center;
    font-weight: ${({ fontWeight }) => fontWeight ?? '600'};
    border: none;
    //TODO : Add focus styles
    border-radius: ${({rounded}) => rounded ? tokens.borderRadius.ROUND : tokens.borderRadius.ZERO}px;
    padding: ${tokens.padding.BASELINE * 2}px ${tokens.padding.BASELINE * 3}px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;

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
