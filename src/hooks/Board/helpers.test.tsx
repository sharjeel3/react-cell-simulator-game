import { getAliveMap } from './helpers';
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
});
