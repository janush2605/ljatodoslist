import {generateId} from "./IdGenerator";

describe('Id generator tests', (): void => {
  it('should generate different ids', () => {
    const id1: string = generateId();
    const id2: string = generateId();
    expect(id1).not.toEqual(id2, 'Generated ids should be different');
  });
});
