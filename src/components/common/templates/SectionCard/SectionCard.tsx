import type { ReactNode } from 'react'
import * as S from './styled'
import { Typography as T } from '../../../../core/typography'
import { DividerBar, PaddedContainer } from '../../styled'
import tokens from '../../../../core/tokens'

type Props = {
  title: string
  children: ReactNode
}

export default function SectionCard({ title, children }: Props) {
  return (
    <S.Wrapper>
      <PaddedContainer padding={tokens.padding.BASELINE * 2.5}>
        <T.BodyMedium demi margin="0">
          {title}
        </T.BodyMedium>
      </PaddedContainer>
      <DividerBar />
      <S.Body>{children}</S.Body>
    </S.Wrapper>
  )
}
