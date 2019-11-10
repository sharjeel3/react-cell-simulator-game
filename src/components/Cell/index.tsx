import React from 'react';
import { CellRoot } from './styles';
import { aliveMapType, cellClickPayloadType } from '../../hooks/Board';

type propTypes = {
  onClick: (x: cellClickPayloadType) => void;
  aliveMap: aliveMapType;
  x: number;
  y: number;
};

export const Cell: React.FC<any> = (props: propTypes): any => {
  const { onClick, x, y, aliveMap } = props;
  const id = `${x}${y}`;
  const alive = aliveMap[id] || false;
  const handleClick = () => {
    const payload = {
      id,
      x,
      y
    };
    onClick(payload);
  };

  return <CellRoot alive={alive} onClick={handleClick} />;
};
