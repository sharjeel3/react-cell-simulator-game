import styled from 'styled-components';

type props = {
  alive?: boolean;
};

export const CellRoot = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  height: 100%;
  flex-basis: 10%;
  cursor: pointer;
  ${(p: props) => p.alive && `background-color: green;`}
`;
