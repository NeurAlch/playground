import { Graph } from '../../data-structures/graph';

describe('Graph', () => {
  it('should create graph', () => {
    const graph = new Graph<number>();
    expect(graph).toBeInstanceOf(Graph);
    expect(graph.isEmpy()).toBe(true);
  });
});
