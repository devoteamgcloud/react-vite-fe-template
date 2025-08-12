// BaseLayout/index.tsx
import type { ReactNode } from 'react'
import * as S from './styled'
import { Typography as T } from '../../../core/typography'

type Props = {
  title?: string
  subtitle?: string
  actions?: ReactNode
  children: ReactNode
}

export default function BaseLayout({
  title = 'React-Vite Template',
  subtitle = 'Explore reusable components, hooks, and patterns',
  actions,
  children,
}: Props) {
  return (
    <S.Root>
      <S.Header role="banner">
        <div>
          <T.Heading3 margin="0" bold>
            {title}
          </T.Heading3>
          <T.BodySmall margin="0">{subtitle}</T.BodySmall>
        </div>
        {actions}
      </S.Header>

      <S.Main role="main">{children}</S.Main>
    </S.Root>
  )
}
