import styled from '@emotion/styled'
import tokens from '../../../../core/tokens'

export const List = styled.ul`
  margin: ${tokens.spacing.BASELINE}px 0;
  padding-left: ${tokens.spacing.BASELINE * 2}px;
  list-style-type: disc;
`

export const ListItem = styled.li`
  margin-bottom: ${tokens.spacing.BASELINE}px;
  color: ${({ theme }) => theme.colors.text.primary};
`
