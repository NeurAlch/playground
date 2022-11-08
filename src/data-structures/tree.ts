interface ITreeNode<TValue> {
  value: TValue;
  toArray(): TValue[];
}

interface ITree<TValue> {
  toArray(): TValue[];
  remove(value: TValue): void;
}

export class TreeNode<TValue> implements ITreeNode<TValue> {
  private _value: TValue;
  private _children: ITreeNode<TValue>[] = [];

  constructor(defaultValue: TValue) {
    this._value = defaultValue;
    this._children = [];
  }

  public get value(): TValue {
    return this._value;
  }

  public toArray(): TValue[] {
    return [];
  }
}

export class Tree<TValue> implements ITree<TValue> {
  private root: TreeNode<TValue>;

  constructor(rootValue: TValue) {
    this.root = new TreeNode<TValue>(rootValue);
  }

  public remove(value: TValue) {
    value;
  }

  public toArray(): TValue[] {
    return this.root.toArray();
  }
}
