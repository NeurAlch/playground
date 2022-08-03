interface ILinkedListBase<TValue, TNode> {
  length: number;
  head: TValue | undefined;
  headNode: TNode | undefined;

  values(): IterableIterator<TValue>;
  indexOf(value: TValue): number;
  toArray(): TValue[];
}

export interface ILinkedList<TValue, TNode> extends ILinkedListBase<TValue, TNode> {
  tail: TValue | undefined;

  push(value: TValue): void;
  pop(): TValue | undefined;
  insertAt(index: number, value: TValue): void;
  removeAt(index: number): TValue | undefined;
  peak(): TValue | undefined;
  at(index: number): TValue | undefined;
  shift(): TValue | undefined;
}

export class LinkedListBase<TValue, TNode extends { next?: TNode; value: TValue }> implements ILinkedListBase<TValue, TNode> {
  protected _length: number;
  protected _head: TNode | undefined;

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

  protected nodeAt(index: number): TNode | undefined {
    let i = 0;
    let currentNode: TNode | undefined = this._head;

    while (i < index) {
      currentNode = currentNode?.next;
      i++;
    }

    return currentNode;
  }

  toArray(): TValue[] {
    const array: TValue[] = [];
    let currentNode = this._head;
    while (currentNode !== undefined) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  indexOf(value: TValue): number {
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

  *values(): IterableIterator<TValue> {
    let currentNode = this._head;
    while (currentNode !== undefined) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }

  get head(): TValue | undefined {
    return this._head?.value;
  }

  get headNode(): TNode | undefined {
    return this._head;
  }

  set headNode(node: TNode | undefined) {
    this._head = node;
  }

  get length(): number {
    return this._length;
  }
}
