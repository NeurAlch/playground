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
  value: TValue | undefined;
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

  addVertex(id: string, value?: TValue) {
    this.updateVertex(id, value);
  }

  updateVertex(id: string, value: TValue | undefined): void {
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
    for (const vertex of Object.keys(this.vertexes)) {
      if (vertex !== a) {
        this.removeEdge(vertex, a);
      }
    }

    if (this.vertexes[a]) {
      delete this.vertexes[a];
    }
  }

  addEdge(a: string, b: string): void {
    if (!this.vertexes[a]) {
      this.addVertex(a);
    }

    if (!this.vertexes[b]) {
      this.addVertex(b);
    }

    this.vertexes[a].edges.push(b);
    this.vertexes[b].edges.push(a);
  }

  removeEdge(a: string, b: string): void {
    const vertexA = this.vertexes[a];
    if (vertexA) {
      vertexA.edges = vertexA.edges.filter((edge) => edge !== b);
    }

    const vertexB = this.vertexes[b];
    if (vertexB) {
      vertexB.edges = vertexB.edges.filter((edge) => edge !== a);
    }
  }

  getVertexValue(a: string): TValue | undefined {
    return this.vertexes[a]?.value;
  }

  isEmpy(): boolean {
    return Object.keys(this.vertexes).length === 0;
  }
}
