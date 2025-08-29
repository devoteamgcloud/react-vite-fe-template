import styled from '@emotion/styled';
import tokens from '../../../../core/tokens';
import { FlexContainer } from '../../styled';

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${tokens.borderRadius.BASELINE}px;
  box-shadow: 0 1px 3px 0 ${({ theme }) => theme.colors.boxShadow};
  overflow: hidden;
`;

export const Body = styled(FlexContainer)`
  gap: ${tokens.gap.LARGE}px;
  padding: ${tokens.padding.BASELINE * 2.5}px;
`;
