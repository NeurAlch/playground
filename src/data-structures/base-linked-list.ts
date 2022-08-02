interface LLBase {
  length: number;
}

export interface LL<VType> extends LLBase {
  head: VType | undefined;
  tail: VType | undefined;

  push(value: VType): void;
  pop(): VType | undefined;
  insertAt(index: number, value: VType): void;
  removeAt(index: number): VType | undefined;
  peak(): VType | undefined;
  at(index: number): VType | undefined;
  toArray(): VType[];
  indexOf(value: VType): number;
  values(): IterableIterator<VType>;
}

export class LinkedListBase<NType extends { next?: NType }> implements LLBase {
  protected _length: number;
  protected _head: NType | undefined;

  constructor() {
    this._length = 0;
  }

  protected getIndex(_index: number): number | undefined {
    let index = _index;

    if (index >= this._length) {
      return undefined;
    }

    if (index < 0) {
      index = this._length + index;
      if (index < 0) {
        return undefined;
      }
    }

    return index;
  }

  protected nodeAt(_index: number): NType | undefined {
    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    let i = 0;
    let currentNode: NType | undefined = this._head;

    while (i < index) {
      currentNode = currentNode?.next;
      i++;
    }

    return currentNode;
  }

  get length(): number {
    return this._length;
  }
}
