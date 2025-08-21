import styled from '@emotion/styled'
import tokens from '../../core/tokens'

export const Main = styled.main`
  padding: ${tokens.padding.BASELINE * 2}px;
`

export const DividerBar = styled.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: ${tokens.size.BASELINE / 8}px solid
    ${({ theme }) => theme.colors.scrollBar};
`
