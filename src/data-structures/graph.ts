export interface IGraph<TValue> {
  neighbors(x: string): string[];
  adjacent(x: string, y: string): boolean;
  updateVertex(id: string, value: TValue): void;
  removeVertex(x: string): void;
  addEdge(x: string, y: string): void;
  removeEdge(x: string, y: string): void;
  getVertexValue(x: string): TValue | undefined;
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

  neighbors(x: string): string[] {
    const vertex = this.vertexes[x];
    if (!vertex) {
      return [];
    }
    return vertex.edges;
  }

  adjacent(x: string, y: string): boolean {
    const vertexX = this.vertexes[x];
    const vertexY = this.vertexes[y];
    if (!vertexX || !vertexY) {
      return false;
    }
    return vertexX.edges.includes(y);
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

  removeVertex(x: string): void {
    delete this.vertexes[x];
    // TODO: remove edges
  }

  addEdge(x: string, y: string): void {
    const vertexX = this.vertexes[x];
    const vertexY = this.vertexes[y];

    if (!vertexX) {
      throw new Error(`Vertex "${x}" does not exist`);
    }

    if (!vertexY) {
      throw new Error(`Vertex "${y}" does not exist`);
    }

    vertexX.edges.push(y);
    vertexY.edges.push(x);
  }

  removeEdge(x: string, y: string): void {
    const vertexX = this.vertexes[x];
    const vertexY = this.vertexes[y];

    if (!vertexX) {
      throw new Error(`Vertex "${x}" does not exist`);
    }

    if (!vertexY) {
      throw new Error(`Vertex "${y}" does not exist`);
    }

    vertexX.edges = vertexX.edges.filter((edge) => edge !== y);
    vertexY.edges = vertexY.edges.filter((edge) => edge !== x);
  }

  getVertexValue(x: string): TValue | undefined {
    return this.vertexes[x]?.value;
  }

  isEmpy(): boolean {
    return Object.keys(this.vertexes).length === 0;
  }
}
