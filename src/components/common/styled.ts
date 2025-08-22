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

export const BaseContainer = styled.div`
  padding: ${tokens.padding.BASELINE * 2.5}px;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.gap.BASELINE}px;
`

export const TabContainer = styled(FlexContainer)`
  gap: ${tokens.gap.BASELINE * 2.5}px;
`
