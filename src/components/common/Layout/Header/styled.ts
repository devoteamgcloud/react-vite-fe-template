import styled from '@emotion/styled'
import tokens from '../../../../core/tokens'

export const Header = styled.header`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: ${tokens.size.BASELINE / 8}px solid
    ${({ theme }) => theme.colors.scrollBar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${tokens.padding.CONTAINER}px ${tokens.padding.CONTAINER / 2}px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: ${tokens.size.BASELINE}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    padding: ${tokens.padding.BASELINE * 2}px;

    & > div {
      gap: ${tokens.size.BASELINE / 2}px;
    }
  }
`
