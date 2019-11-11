import styled from 'styled-components';
import { MAX_HEIGHT, MAX_WIDTH } from '../../constants';
import { colors } from '../../ui-library/brand/colors';

type props = {
  disable: boolean;
};

export const BoardRoot = styled.div`
  width: ${MAX_WIDTH}em;
  height: ${MAX_HEIGHT}em;
  background: ${colors.grey};
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  margin: auto;
  position: relative;
  ${(p: props) =>
    p.disable &&
    `
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      cursor: not-allowed;
    }
  `}
`;

export const ButtonWrap = styled.div`
  margin: 1em auto;
  text-align: center;
`;
