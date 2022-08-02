interface DLLNode<VType> {
  value: VType;
  next?: DLLNode<VType>;
  prev?: DLLNode<VType>;
}

interface DLL<VType> {
  length: number;
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

export class DoubleLinkedList<VType> implements DLL<VType> {
  protected _length: number;
  protected _head: DLLNode<VType> | undefined;
  protected _tail: DLLNode<VType> | undefined;

  constructor() {
    this._length = 0;
  }

  push(value: VType): void {
    const node: DLLNode<VType> = { value };

    if (this._head === undefined || this._tail === undefined) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }

    this._length++;
  }

  pop(): VType | undefined {
    if (this._head === undefined || this._tail === undefined) {
      return undefined;
    }

    const node = this._tail;
    this._tail = this._tail.prev;
    if (this._tail === undefined) {
      this._head = undefined;
    } else {
      this._tail.next = undefined;
    }

    this._length--;
    return node.value;
  }

  private nodeAt(_index: number): DLLNode<VType> | undefined {
    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    let i = 0;
    let currentNode: DLLNode<VType> | undefined = this._head;

    while (i < index) {
      currentNode = currentNode?.next;
      i++;
    }

    return currentNode;
  }

  private getIndex(_index: number): number | undefined {
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

  at(index: number): VType | undefined {
    const currentNode = this.nodeAt(index);
    return currentNode?.value;
  }

  insertAt(_index: number, value: VType): void {
    if (!this._head) {
      return;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return;
    }

    const node: DLLNode<VType> = { value };
    const currentNode: DLLNode<VType> | undefined = this.nodeAt(index);
    const previousNode: DLLNode<VType> | undefined = currentNode?.prev;

    if (previousNode === undefined) {
      this._head = node;
    } else {
      previousNode.next = node;
    }

    if (currentNode !== undefined) {
      currentNode.prev = node;
    }

    this._length++;
    node.next = currentNode;
  }

  removeAt(_index: number): VType | undefined {
    if (!this._head || !this._tail) {
      return undefined;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    const currentNode = this.nodeAt(index);
    if (currentNode === undefined) {
      return undefined;
    }

    const previousNode = currentNode.prev;
    const nextNode = currentNode.next;

    if (previousNode === undefined) {
      this._head = nextNode;
    } else {
      previousNode.next = nextNode;
    }

    if (nextNode === undefined) {
      this._tail = previousNode;
    } else {
      nextNode.prev = previousNode;
    }

    this._length--;
    return currentNode.value;
  }

  indexOf(value: VType): number {
    let currentNode: DLLNode<VType> | undefined = this._head;
    let i = 0;
    while (currentNode !== undefined) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.next;
      i++;
    }
    return -1;
  }

  toArray(): VType[] {
    const array: VType[] = [];
    let currentNode: DLLNode<VType> | undefined = this._head;
    while (currentNode !== undefined) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  peak(): VType | undefined {
    return this._tail?.value;
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

  get tail(): VType | undefined {
    return this._tail?.value;
  }

  get length(): number {
    return this._length;
  }
}
