import styled from '@emotion/styled';
import tokens from '../../../../core/tokens';

const DIVIDER_W = `${tokens.size.BASELINE / 8}px`;
const INDICATOR_H = '2px';

export const Bar = styled.nav`
  display: flex;
  gap: ${tokens.gap.LARGE}px;
  margin: ${tokens.spacing.BASELINE * 2}px 0 ${tokens.spacing.BASELINE}px;
  border-bottom: ${DIVIDER_W} solid ${({ theme }) => theme.colors.scrollBar};
`;

export const TabButton = styled.button<{ active: boolean }>`
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(p) =>
        p.active ? p.theme.colors.primary : p.theme.colors.text.primary};
  font-size: ${tokens.text.fontSize.BASELINE}px;
  font-weight: ${({ active }) =>
        active ? tokens.text.fontWeight.semiBold : tokens.text.fontWeight.normal};

  padding: ${tokens.spacing.BASELINE}px ${tokens.spacing.BASELINE * 2}px;
  padding-bottom: ${tokens.spacing.BASELINE * 1.5}px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(-1 * ${DIVIDER_W});
    height: ${INDICATOR_H};
    background: ${({ theme }) => theme.colors.primary};
    transform: ${({ active }) => (active ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: left;
    transition: transform 160ms ease;
  }
`;

export const Panel = styled.section`
  padding-top: ${tokens.spacing.BASELINE * 2}px;
`;
