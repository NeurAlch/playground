export interface IGraph<TValue> {
  neighbors(id: string): string[];
  adjacent(a: string, b: string): boolean;
  updateVertex(id: string, value: TValue): void;
  removeVertex(a: string): void;
  addEdge(a: string, b: string): void;
  removeEdge(a: string, b: string): void;
  getVertexValue(a: string): TValue | undefined;
  isEmpy(): boolean;
}

interface IVertex<TValue> {
  id: string;
  value: TValue;
  edges: string[];
}

export class Graph<TValue> implements IGraph<TValue> {
  private readonly vertexes: Record<string, IVertex<TValue>>;

  constructor() {
    this.vertexes = {};
  }

  neighbors(a: string): string[] {
    const vertex = this.vertexes[a];
    if (!vertex) {
      return [];
    }
    return vertex.edges;
  }

  adjacent(a: string, b: string): boolean {
    const vertexX = this.vertexes[a];
    const vertexY = this.vertexes[b];
    if (!vertexX || !vertexY) {
      return false;
    }
    return vertexX.edges.includes(b);
  }

  updateVertex(id: string, value: TValue): void {
    if (this.vertexes[id]) {
      this.vertexes[id].value = value;
    } else {
      this.vertexes[id] = {
        id,
        value,
        edges: [],
      };
    }
  }

  removeVertex(a: string): void {
    if (!this.vertexes[a]) {
      throw new Error(`Vertex "${a}" does not exist`);
    }

    for (const vertex of Object.keys(this.vertexes)) {
      if (vertex !== a) {
        this.removeEdge(vertex, a);
      }
    }

    delete this.vertexes[a];
  }

  addEdge(a: string, b: string): void {
    const vertexA = this.vertexes[a];
    const vertexB = this.vertexes[b];

    if (!vertexA) {
      throw new Error(`Vertex "${a}" does not exist`);
    }

    if (!vertexB) {
      throw new Error(`Vertex "${b}" does not exist`);
    }

    vertexA.edges.push(b);
    vertexB.edges.push(a);
  }

  removeEdge(a: string, b: string): void {
    const vertexA = this.vertexes[a];
    const vertexB = this.vertexes[b];

    if (!vertexA) {
      throw new Error(`Vertex "${a}" does not exist`);
    }

    if (!vertexB) {
      throw new Error(`Vertex "${b}" does not exist`);
    }

    vertexA.edges = vertexA.edges.filter((edge) => edge !== b);
    vertexB.edges = vertexB.edges.filter((edge) => edge !== a);
  }

  getVertexValue(a: string): TValue | undefined {
    return this.vertexes[a]?.value;
  }

  isEmpy(): boolean {
    return Object.keys(this.vertexes).length === 0;
  }
}
