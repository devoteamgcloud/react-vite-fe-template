import type { ReactNode } from 'react'
import * as S from './styled'
import { Typography as T } from '../../../../core/typography'

type Props = {
  title: string
  subtitle?: string
  actions?: ReactNode
}

export default function BaseLayout({
  title = 'Title',
  subtitle = '',
  actions,
}: Props) {
  return (
    <S.Header role="banner">
      <div>
        <T.Heading3 margin="0" bold>
          {title}
        </T.Heading3>
        <T.BodySmall margin="0">{subtitle}</T.BodySmall>
      </div>
      {actions}
    </S.Header>
  )
}
