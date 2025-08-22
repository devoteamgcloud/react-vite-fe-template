import styled from '@emotion/styled'
import { BaseContainer, FlexContainer } from '../../styled'
import tokens from '../../../../core/tokens'

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${tokens.borderRadius.BASELINE}px;
  box-shadow: 0 1px 3px 0 ${({ theme }) => theme.colors.boxShadow};
`

export const Header = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${tokens.gap.LARGE}px;
`

export const Body = styled(FlexContainer)`
  gap: ${tokens.gap.LARGE}px;
  padding: ${tokens.padding.BASELINE * 2.5}px;
`
