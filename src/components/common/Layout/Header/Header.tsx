import type { ReactNode, ForwardedRef } from 'react'
import * as S from './styled'
import { Typography as T } from '../../../../core/typography'

type Props = {
  title: string
  subtitle?: string
  actions?: ReactNode
  forwardedRef?: ForwardedRef<HTMLDivElement>
}

export default function BaseLayout({
  title = 'Title',
  subtitle = '',
  actions,
  forwardedRef,
}: Props) {
  return (
    <S.Header role="banner" ref={forwardedRef}>
      <div>
        <T.Heading3 bold>{title}</T.Heading3>
        <T.BodySmall>{subtitle}</T.BodySmall>
      </div>
      {actions}
    </S.Header>
  )
}
