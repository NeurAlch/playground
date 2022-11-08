interface ITreeNode<TValue> {
  id: string;
  value: TValue;
  toArray(): TValue[];
}

interface ITree<TValue> {
  toArray(): TValue[];
  remove(value: TValue): void;
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

  public toArray(): TValue[] {
    return [];
  }
}

export class Tree<TValue> implements ITree<TValue> {
  private root: TreeNode<TValue>;

  constructor(rootId: string, rootValue: TValue) {
    this.root = new TreeNode<TValue>(rootId, rootValue);
  }

  public remove(value: TValue) {
    value;
  }

  public toArray(): TValue[] {
    return this.root.toArray();
  }
}
