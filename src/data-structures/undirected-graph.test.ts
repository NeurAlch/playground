import { UndirectedGraph } from '../../data-structures/UndirectedGraph';

describe('UndirectedGraph', () => {
  it('should create graph', () => {
    const graph = new UndirectedGraph<number>();
    expect(graph).toBeInstanceOf(UndirectedGraph);
    expect(graph.isEmpy()).toBe(true);
  });

  it('should add vertex', () => {
    const graph = new UndirectedGraph<number>();
    expect(() => graph.addVertex('A')).not.toThrow();
    expect(graph.isEmpy()).toBe(false);
    expect(graph.getVertexValue('A')).toBeUndefined();
    expect(graph.neighbors('A')).toEqual([]);
  });

  it('should throw when adding an existing vertex', () => {
    const graph = new UndirectedGraph<number>();
    graph.addVertex('A');
    expect(() => graph.addVertex('A')).toThrowError('Vertex with id A already exists');
  });

  it('should update vertex', () => {
    const graph = new UndirectedGraph<number>();
    graph.addVertex('A', 0);
    expect(graph.getVertexValue('A')).toBe(0);
    expect(() => graph.updateVertex('A', 1)).not.toThrow();
    expect(graph.getVertexValue('A')).toBe(1);
  });

  it('should throw when updating a non-existing vertex', () => {
    const graph = new UndirectedGraph<number>();
    expect(() => graph.updateVertex('A', 1)).toThrowError('Vertex with id A does not exist');
  });

  it('should add edge', () => {
    const graph = new UndirectedGraph<number>();
    graph.addVertex('A');
    graph.addVertex('B');
    expect(() => graph.addEdge('A', 'B')).not.toThrow();
    expect(graph.adjacent('A', 'B')).toBe(true);
    expect(graph.adjacent('B', 'A')).toBe(true);
    expect(graph.neighbors('A')).toEqual(['B']);
    expect(graph.neighbors('B')).toEqual(['A']);
  });

  it('should throw when adding an edge to a non-existing vertex', () => {
    const graph = new UndirectedGraph<number>();
    expect(() => graph.addEdge('A', 'B')).toThrowError('Vertex with id A does not exist');
    graph.addVertex('A');
    expect(() => graph.addEdge('A', 'B')).toThrowError('Vertex with id B does not exist');
  });

  it('should remove edge', () => {
    const graph = new UndirectedGraph<number>();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(() => graph.removeEdge('A', 'B')).not.toThrow();
    expect(graph.adjacent('A', 'B')).toBe(false);
    expect(graph.adjacent('B', 'A')).toBe(false);
    expect(graph.neighbors('A')).toEqual([]);
    expect(graph.neighbors('B')).toEqual([]);
  });

  it('should remove vertex', () => {
    const graph = new UndirectedGraph<number>();
    graph.addVertex('A');
    expect(() => graph.removeVertex('A')).not.toThrow();
    expect(graph.isEmpy()).toBe(true);
  });

  it('should remove edges when removing vertex', () => {
    const graph = new UndirectedGraph<number>();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    graph.removeVertex('A');
    expect(() => graph.adjacent('A', 'B')).toThrowError('Vertex with id A does not exist');
    expect(() => graph.adjacent('B', 'A')).toThrowError('Vertex with id A does not exist');
    expect(() => graph.neighbors('A')).toThrowError('Vertex with id A does not exist');
    expect(graph.neighbors('B')).toEqual([]);
  });
});
