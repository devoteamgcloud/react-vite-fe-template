import { Typography as T } from '../../../../core/typography';
import { FlexContainer } from '../../styled';
import * as S from './styled';

type ListProps = {
  title: string
  items: string[]
}

export default function List({ title, items }: ListProps) {
  return (
    <FlexContainer>
      <T.BodyBase demi>{title}</T.BodyBase>
      <S.List>
        {items.map((item) => (
          <S.ListItem key={item}>{item}</S.ListItem>
        ))}
      </S.List>
    </FlexContainer>
  );
}
