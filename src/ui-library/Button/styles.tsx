import styled from 'styled-components';
import { colors } from '../brand/colors';

export const StyledButton = styled.button`
  font-size: 1em;
  height: 2.5em;
  line-height: 2.5em;
  text-overflow: ellipsis;
  color: ${colors.white};
  background-color: ${colors.green};
  cursor: pointer;
  padding: 0 2em;
  border-radius: 0.25em;
`;
