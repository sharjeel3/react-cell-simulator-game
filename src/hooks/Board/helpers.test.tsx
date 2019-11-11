import {getAliveMap, getXYWithWrap} from './helpers';
import { cellType } from './index';

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
});
