import { Tree } from './tree';

describe('tree', () => {
  it('should create a tree', () => {
    const tree = new Tree<number>('A', 1);
    expect(tree).toBeInstanceOf(Tree);
    expect(tree.toArray().length).toBe(1);
    expect(tree.toArray()).toEqual([['A', 1]]);
  });

  it('should show degree zero if only one node', () => {
    const tree = new Tree<number>('A', 1);
    expect(tree.degree).toBe(0);
  });
});
