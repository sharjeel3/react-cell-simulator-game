import styled from 'styled-components';
import { colors } from '../brand/colors';

type props = {
  bold: boolean | undefined;
};

export const NormalText = styled.p`
  font-size: 0.5em;
  line-height: 1.5em;
  color: ${colors.black};
  margin-bottom: 1em;
  &:last-child {
    margin-bottom: 0;
  }
  ${(p: props) => p.bold && `font-weight: bold`}
`;
