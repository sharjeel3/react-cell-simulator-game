import styled from 'styled-components';
import { colors } from '../brand/colors';

type props = {
  light: boolean | undefined;
  block: boolean | undefined;
  disabled: boolean | undefined;
};

export const StyledButton = styled.button`
  font-size: 0.5em;
  height: 2.5em;
  line-height: 2.5em;
  text-overflow: ellipsis;
  color: ${colors.white};
  background-color: ${colors.green};
  cursor: pointer;
  padding: 0 2em;
  border-radius: 0.25em;
  margin-bottom: 1em;
  ${(p: props) => p.light && `background-color: ${colors.grey}`}
  ${(p: props) => p.block && `display: block;`}
  ${(p: props) =>
    p.disabled &&
    `
    pointer-events: none;
    opacity: 0.5;
  `}
`;
