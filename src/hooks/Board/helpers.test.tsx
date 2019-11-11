import {
  getAliveMap,
  getId,
  getNeighbors,
  getNextGenerationAliveStatus,
  getXYWithWrap
} from './helpers';
import { aliveMapType, cellType } from './index';

describe('Board Hook Helpers', () => {
  it('should return live map', () => {
    const one: cellType = { x: 1, y: 3, id: '13', alive: true };
    const two: cellType = { x: 4, y: 6, id: '46', alive: true };
    const three: cellType = { x: 2, y: 9, id: '29', alive: true };
    const cells: Array<cellType> = [one, two, three];
    const aliveMap = getAliveMap(cells);
    expect(aliveMap).toEqual({
      '13': true,
      '46': true,
      '29': true
    });
  });

  it('should return Id', () => {
    expect(getId(2, 5)).toBe('25');
  });

  it('should wrap cells outside board', () => {
    const { newX, newY } = getXYWithWrap(10, 9);
    expect(newX).toBe(10);
    expect(newY).toBe(9);

    const { newX: newX2, newY: newY2 } = getXYWithWrap(11, 3);
    expect(newX2).toBe(1);
    expect(newY2).toBe(3);

    const { newX: newX3, newY: newY3 } = getXYWithWrap(4, 0);
    expect(newX3).toBe(4);
    expect(newY3).toBe(10);
  });

  it('should provide live status for next generation', () => {
    const one: cellType = { x: 2, y: 3, id: '23', alive: true };
    const two: cellType = { x: 3, y: 4, id: '34', alive: true };
    const three: cellType = { x: 4, y: 2, id: '42', alive: true };
    const four: cellType = { x: 4, y: 3, id: '43', alive: true };
    const five: cellType = { x: 4, y: 4, id: '44', alive: true };
    const cells: Array<cellType> = [one, two, three, four, five];
    const aliveMap: aliveMapType = {
      '23': true,
      '34': true,
      '42': true,
      '43': true,
      '44': true
    };
    expect(getNextGenerationAliveStatus(cells[0], aliveMap)).toEqual(false);
    expect(getNextGenerationAliveStatus(cells[1], aliveMap)).toEqual(true);
    expect(getNextGenerationAliveStatus(cells[2], aliveMap)).toEqual(false);
    expect(getNextGenerationAliveStatus(cells[3], aliveMap)).toEqual(true);
    expect(getNextGenerationAliveStatus(cells[4], aliveMap)).toEqual(true);
  });

  it('should return all neighbors of a cell', () => {
    const one: cellType = { x: 2, y: 3, id: '23', alive: true };
    const aliveMap: aliveMapType = {
      '23': true,
      '34': true,
      '42': true,
      '43': true,
      '44': true
    };
    expect(getNeighbors(one, aliveMap)).toEqual([
      { x: 1, y: 2, id: '12', alive: false },
      { x: 1, y: 3, id: '13', alive: false },
      { x: 1, y: 4, id: '14', alive: false },
      { x: 2, y: 2, id: '22', alive: false },
      { x: 2, y: 4, id: '24', alive: false },
      { x: 3, y: 2, id: '32', alive: false },
      { x: 3, y: 3, id: '33', alive: false },
      { x: 3, y: 4, id: '34', alive: true }
    ]);
  });
});
