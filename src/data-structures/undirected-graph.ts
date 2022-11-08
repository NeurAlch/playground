export interface IGraph<TValue> {
  neighbors(id: string): string[];
  adjacent(a: string, b: string): boolean;
  addVertex(id: string, value?: TValue): void;
  updateVertex(id: string, value: TValue): void;
  removeVertex(a: string): void;
  addEdge(a: string, b: string): void;
  removeEdge(a: string, b: string): void;
  getVertexValue(a: string): TValue | undefined;
  isEmpy(): boolean;
}

interface IVertex<TValue> {
  id: string;
  edges: string[];
  value: TValue;
}

export class UndirectedGraph<TValue> implements IGraph<TValue> {
  private readonly adjacencyList: Record<string, IVertex<TValue>>;

  constructor() {
    this.adjacencyList = {};
  }

  neighbors(a: string): string[] {
    const vertex = this.adjacencyList[a];
    if (!vertex) {
      throw new Error(`Vertex with id ${a} does not exist`);
    }
    return vertex.edges;
  }

  adjacent(a: string, b: string): boolean {
    const vertexX = this.adjacencyList[a];
    const vertexY = this.adjacencyList[b];

    if (!vertexX) {
      throw new Error(`Vertex with id ${a} does not exist`);
    }

    if (!vertexY) {
      throw new Error(`Vertex with id ${b} does not exist`);
    }

    return vertexX.edges.includes(b);
  }

  addVertex(id: string, value: TValue) {
    if (this.adjacencyList[id]) {
      throw new Error(`Vertex with id ${id} already exists`);
    }

    this.adjacencyList[id] = {
      id,
      value,
      edges: [],
    };
  }

  updateVertex(id: string, value: TValue): void {
    if (!this.adjacencyList[id]) {
      throw new Error(`Vertex with id ${id} does not exist`);
    }

    this.adjacencyList[id].value = value;
  }

  removeVertex(a: string): void {
    for (const vertex of Object.keys(this.adjacencyList)) {
      if (vertex !== a) {
        this.removeEdge(vertex, a);
      }
    }

    if (this.adjacencyList[a]) {
      delete this.adjacencyList[a];
    }
  }

  addEdge(a: string, b: string): void {
    if (!this.adjacencyList[a]) {
      throw new Error(`Vertex with id ${a} does not exist`);
    }

    if (!this.adjacencyList[b]) {
      throw new Error(`Vertex with id ${b} does not exist`);
    }

    this.adjacencyList[a].edges.push(b);
    this.adjacencyList[b].edges.push(a);
  }

  removeEdge(a: string, b: string): void {
    const vertexA = this.adjacencyList[a];
    if (vertexA) {
      vertexA.edges = vertexA.edges.filter((edge) => edge !== b);
    }

    const vertexB = this.adjacencyList[b];
    if (vertexB) {
      vertexB.edges = vertexB.edges.filter((edge) => edge !== a);
    }
  }

  getVertexValue(a: string): TValue | undefined {
    return this.adjacencyList[a]?.value;
  }

  isEmpy(): boolean {
    return Object.keys(this.adjacencyList).length === 0;
  }
}
