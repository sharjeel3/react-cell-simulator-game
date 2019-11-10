import React from 'react';
import { BoardRoot, ButtonWrap } from './styles';
import { MAX_HEIGHT, MAX_WIDTH } from '../../constants';
import { Row } from '../Row';
import { Cell } from '../Cell';
import { useBoardHook } from '../../hooks/Board';
import { Button } from '../../ui-library/Button';

const rows: Array<Array<number>> = [];
const columns: Array<number> = [];

for (let ii = 1; ii <= MAX_WIDTH; ii++) {
  columns.push(ii);
}

for (let ii = 1; ii <= MAX_HEIGHT; ii++) {
  rows.push(columns);
}

export const Board: React.FC<any> = (): any => {
  const { onCellClick, aliveMap } = useBoardHook();
  return (
    <BoardRoot>
      {rows.map((item, kk) => {
        return (
          <Row key={kk}>
            {item.map((col, jj) => {
              return <Cell x={kk + 1} aliveMap={aliveMap} y={col} onClick={onCellClick} key={jj} />;
            })}
          </Row>
        );
      })}
      <ButtonWrap>
        <Button block>Next Generation</Button>
        <Button light>Reset</Button>
      </ButtonWrap>
    </BoardRoot>
  );
};
