import { useState } from 'react';
import { getAliveMap } from './helpers';

export type cellType = {
  alive: boolean;
  id: string;
  x: number;
  y: number;
};

export type cellClickPayloadType = {
  id: string;
  x: number;
  y: number;
};

export type aliveMapType = {
  [id: string]: boolean;
};

export const useBoardHook = () => {
  const [aliveCells, setAliveCells] = useState<Array<cellType>>([]);

  const handleCellClick = (payload: cellClickPayloadType): void => {
    const previousCells = aliveCells.filter(cell => cell.id !== payload.id);
    const alive = !(aliveCells.find(cell => cell.id === payload.id) || {}).alive;
    setAliveCells(alive ? [...previousCells, { ...payload, alive }] : [...previousCells]);
  };

  const handleResetClick = () => {
    setAliveCells([]);
  };

  const aliveMap = getAliveMap(aliveCells);

  return { onCellClick: handleCellClick, onReset: handleResetClick, aliveMap };
};
