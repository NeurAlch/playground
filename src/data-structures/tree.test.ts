import { Tree } from './tree';

describe('tree', () => {
  it('should create a tree', () => {
    const tree = new Tree<number>('A', 1);
    expect(tree).toBeInstanceOf(Tree);
    expect(tree.toArray().length).toBe(0);
  });
});
