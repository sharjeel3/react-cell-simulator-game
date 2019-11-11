import { useState } from 'react';
import { getAliveMap, getNeighbors, getNextGenerationAliveStatus, getXYWithWrap } from './helpers';

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
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  const aliveMap = getAliveMap(aliveCells);

  const handleCellClick = (payload: cellClickPayloadType): void => {
    const previousCells = aliveCells.filter(cell => cell.id !== payload.id);
    const alive = !(aliveCells.find(cell => cell.id === payload.id) || {}).alive;
    setAliveCells(alive ? [...previousCells, { ...payload, alive }] : [...previousCells]);
  };

  const handleResetClick = () => {
    setAliveCells([]);
    setIsGameStarted(false);
  };

  const resetIsWorking = () => {
    setTimeout(() => {
      setIsWorking(false);
    }, 300);
  }

  const doNextGeneration = () => {
    setIsWorking(true);
    setIsGameStarted(true);

    const tempCells: Array<cellType> = [];
    const tempIds: Array<string> = [];

    const aliveCellsCount = aliveCells.length;

    for (let ii = 0; ii < aliveCellsCount; ii++) {
      // Firstly find cells that will "live" to next generation
      const shouldLive = getNextGenerationAliveStatus(aliveCells[ii], aliveMap);
      if (shouldLive) {
        tempIds.push(aliveCells[ii].id);
        tempCells.push({ ...aliveCells[ii] });
      }

      // Find out new cells that should "come to life"
      const inactiveNeighbors = getNeighbors(aliveCells[ii], aliveMap).filter(cell => !cell.alive);
      const inactiveNeighborsLength = inactiveNeighbors.length;
      for (let jj = 0; jj < inactiveNeighborsLength; jj++) {
        const liveNeighborsCount = getNeighbors(inactiveNeighbors[jj], aliveMap).filter(
          item => item.alive
        ).length;
        if (liveNeighborsCount === 3 && !tempIds.includes(inactiveNeighbors[jj].id)) {
          const { newX, newY } = getXYWithWrap(inactiveNeighbors[jj].x, inactiveNeighbors[jj].y);
          tempIds.push(inactiveNeighbors[jj].id);
          tempCells.push({ id: `${newX}${newY}`, x: newX, y: newY, alive: true });
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
    isWorking,
    isGameStarted
  };
};
