import styled from '@emotion/styled'
import tokens from '../../core/tokens'

export const PaddedContainer = styled.div<{ padding?: number }>`
  padding: ${(p) => p.padding ?? tokens.padding.BASELINE * 2}px;
`

export const Main = styled(PaddedContainer)``

export const DividerBar = styled.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: ${tokens.size.BASELINE / 8}px solid
    ${({ theme }) => theme.colors.scrollBar};
`

export const FlexContainer = styled.div<{
  direction?: 'row' | 'column'
  gap?: number
  align?: string
  justify?: string
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(p) => p.direction ?? 'column'};
  gap: ${(p) => p.gap ?? tokens.gap.BASELINE}px;
  align-items: ${(p) => p.align ?? 'stretch'};
  justify-content: ${(p) => p.justify ?? 'flex-start'};
`
