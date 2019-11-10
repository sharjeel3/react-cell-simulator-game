import styled from 'styled-components';
import { MAX_HEIGHT, MAX_WIDTH } from '../../constants';
import { colors } from '../../ui-library/brand/colors';

export const BoardRoot = styled.div`
  width: ${MAX_WIDTH}em;
  height: ${MAX_HEIGHT}em;
  background: ${colors.grey};
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  margin: auto;
`;
