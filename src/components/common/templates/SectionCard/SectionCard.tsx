import type { ReactNode } from 'react'
import * as S from './styled'
import { Typography as T } from '../../../../core/typography'
import { DividerBar } from '../../styled'

type Props = {
  title: string
  children: ReactNode
}

export default function SectionCard({ title, children }: Props) {
  return (
    <S.Wrapper>
      <S.Header>
        <T.BodyMedium demi margin="0">
          {title}
        </T.BodyMedium>
      </S.Header>
      <DividerBar />
      <S.Body>{children}</S.Body>
    </S.Wrapper>
  )
}
