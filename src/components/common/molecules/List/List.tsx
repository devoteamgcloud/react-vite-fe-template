import { Typography as T } from '../../../../core/typography'
import * as S from './styled'

type ListProps = {
  title: string
  items: string[]
}

export default function List({ title, items }: ListProps) {
  return (
    <S.ListWrapper>
      <T.BodyBase demi margin="0">
        {title}
      </T.BodyBase>
      <S.List>
        {items.map((item) => (
          <S.ListItem key={item}>{item}</S.ListItem>
        ))}
      </S.List>
    </S.ListWrapper>
  )
}
