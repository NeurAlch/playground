interface LLBase<VType, NType> {
  length: number;
  head: VType | undefined;
  headNode: NType | undefined;

  values(): IterableIterator<VType>;
  indexOf(value: VType): number;
  toArray(): VType[];
}

export interface LL<VType, NType> extends LLBase<VType, NType> {
  tail: VType | undefined;

  push(value: VType): void;
  pop(): VType | undefined;
  insertAt(index: number, value: VType): void;
  removeAt(index: number): VType | undefined;
  peak(): VType | undefined;
  at(index: number): VType | undefined;
  shift(): VType | undefined;
}

export class LinkedListBase<VType, NType extends { next?: NType; value: VType }> implements LLBase<VType, NType> {
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

  protected nodeAt(index: number): NType | undefined {
    let i = 0;
    let currentNode: NType | undefined = this._head;

    while (i < index) {
      currentNode = currentNode?.next;
      i++;
    }

    return currentNode;
  }

  toArray(): VType[] {
    const array: VType[] = [];
    let currentNode = this._head;
    while (currentNode !== undefined) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  indexOf(value: VType): number {
    let i = 0;
    let currentNode = this._head;
    while (currentNode !== undefined) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.next;
      i++;
    }
    return -1;
  }

  *values(): IterableIterator<VType> {
    let currentNode = this._head;
    while (currentNode !== undefined) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }

  get head(): VType | undefined {
    return this._head?.value;
  }

  get headNode(): NType | undefined {
    return this._head;
  }

  set headNode(node: NType | undefined) {
    this._head = node;
  }

  get length(): number {
    return this._length;
  }
}
