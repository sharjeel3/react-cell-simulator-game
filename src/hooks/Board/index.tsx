import { useState } from 'react';
import { getAliveMap, getNeighbors } from './helpers';

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
  const [isWorking, setIsWorking] = useState<boolean>(false);

  const aliveMap = getAliveMap(aliveCells);

  const handleCellClick = (payload: cellClickPayloadType): void => {
    const previousCells = aliveCells.filter(cell => cell.id !== payload.id);
    const alive = !(aliveCells.find(cell => cell.id === payload.id) || {}).alive;
    setAliveCells(alive ? [...previousCells, { ...payload, alive }] : [...previousCells]);
  };

  const handleResetClick = () => {
    setAliveCells([]);
  };

  const resetIsWorking = () => {
    setTimeout(() => {
      setIsWorking(false);
    }, 300);
  }

  const doNextGeneration = () => {
    setIsWorking(true);
    const tempCells = [];
    const tempIds = [];

    const length = aliveCells.length;

    for (let ii = 0; ii < length; ii++) {
      // Firstly find cells that will "live" to next generation
      const neighbors = getNeighbors(aliveCells[ii], aliveMap);
      const activeNeighborsCount = neighbors.filter(item => item.alive).length;
      if (activeNeighborsCount < 2 || activeNeighborsCount > 3) continue;
      tempIds.push(aliveCells[ii].id);
      tempCells.push({
        ...aliveCells[ii]
      });

      // Find out new cells that should "come to life"
      const inactiveNeighbors = getNeighbors(aliveCells[ii], aliveMap).filter(cell => !cell.alive);
      const inactiveNeighborsLength = inactiveNeighbors.length;
      for (let jj = 0; jj < inactiveNeighborsLength; jj++) {
        const x = getNeighbors(inactiveNeighbors[jj], aliveMap).filter(item => item.alive).length;
        if (x === 3 && !tempIds.includes(inactiveNeighbors[jj].id)) {
          tempIds.push(inactiveNeighbors[jj].id);
          tempCells.push({ ...inactiveNeighbors[jj], alive: true });
        }
      }
    }

    setAliveCells(tempCells);
    resetIsWorking();
  };

  const handleNextGenerationClick = () => {
    doNextGeneration();
  }

  return {
    onCellClick: handleCellClick,
    onReset: handleResetClick,
    onNextGenerationClick: handleNextGenerationClick,
    aliveMap,
    isWorking
  };
};
