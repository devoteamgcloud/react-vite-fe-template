import styled from '@emotion/styled';
import type { ButtonColor } from './Button';
import tokens from '../../../../core/tokens';

const sizePadding = {
    small: `${tokens.padding.BASELINE * 1}px ${tokens.padding.BASELINE * 2}px`,
    medium: `${tokens.padding.BASELINE * 2}px ${tokens.padding.BASELINE * 3}px`,
    large: `${tokens.padding.BASELINE * 2.5}px ${tokens.padding.BASELINE * 4}px`,
};

const sizeMinWidth = { small: 90, medium: 120, large: 160 };

export const ButtonContainer = styled.button<{
  color: ButtonColor
  width?: number
  fullWidth?: boolean
  variant: 'filled' | 'outlined'
  rounded?: boolean
  fontWeight?: string
  size?: 'small' | 'medium' | 'large'
}>`
  width: ${({ width }) => (width ? `${width}px` : 'auto')};

  ${({ fullWidth, size = 'medium' }) =>
        fullWidth ? `flex: 1 0 ${sizeMinWidth[size]}px;` : `flex: 0 0 auto;`};

  min-width: ${({ size = 'medium' }) => `${sizeMinWidth[size]}px`};
  max-width: 100%;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap; /* no multi-line labels */
  text-overflow: ellipsis;
  overflow: hidden;

  font-weight: ${({ fontWeight }) => fontWeight ?? '600'};
  border: none;
  border-radius: ${({ rounded }) =>
        rounded ? tokens.borderRadius.ROUND : tokens.borderRadius.BASELINE}px;
  padding: ${({ size }) => sizePadding[size ?? 'medium']};
  box-sizing: border-box;
  cursor: pointer;
  height: fit-content;

  ${({ variant, color, theme }) => {
        const style = theme.buttonStyles[color]?.[variant];
        if (!style) {
            return `
        background: gray;
        color: white;
        border: none;
      `;
        }
        return `
      background-color: ${style.background};
      color: ${style.text};
      box-shadow: ${style.border};
      &:hover {
        background: ${style.hover?.background ?? style.background};
        color: ${style.hover?.text ?? style.text};
      }
    `;
    }}
`;
