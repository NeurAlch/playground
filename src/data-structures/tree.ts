// TODO: finish implementation

type Atom<TValue> = [string, TValue];
export interface TValueArray<TValue> extends Array<TValueArray<TValue> | Atom<TValue>> {}

interface ITreeNode<TValue> {
  id: string;
  value: TValue;
  addNode: (newId: string, value: TValue) => void;
  toArray(): TValueArray<TValue>;
}

interface ITree<TValue> {
  degree: number;
  addNode(targetId: string, newId: string, value: TValue): void;
  toArray(): TValueArray<TValue>;
}

export class TreeNode<TValue> implements ITreeNode<TValue> {
  private _id: string;
  private _value: TValue;
  private _edges: ITreeNode<TValue>[] = [];

  constructor(id: string, defaultValue: TValue) {
    this._id = id;
    this._value = defaultValue;
    this._edges = [];
  }

  public get value(): TValue {
    return this._value;
  }

  public get id(): string {
    return this._id;
  }

  public addNode(newId: string, value: TValue): void {
    this._edges.push(new TreeNode<TValue>(newId, value));
  }

  public toArray(): TValueArray<TValue> {
    const arr: TValueArray<TValue> = [];

    if (this._edges.length === 0) {
      arr.push([this.id, this.value]);
      return arr;
    }

    for (const edge of this._edges) {
      arr.push(edge.toArray());
    }

    return arr;
  }
}

export class Tree<TValue> implements ITree<TValue> {
  protected root: TreeNode<TValue>;

  constructor(rootId: string, rootValue: TValue) {
    this.root = new TreeNode<TValue>(rootId, rootValue);
  }

  public toArray(): TValueArray<TValue> {
    return this.root.toArray();
  }

  public addNode(targetId: string, newId: string, value: TValue): void {
    this.root.addNode(newId, value);
  }

  public get degree(): number {
    return 0;
  }
}
