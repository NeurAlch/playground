interface DLLNode {
  value: number;
  next?: DLLNode;
  prev?: DLLNode;
}

interface DLL {
  length: number;
  head: number | undefined;
  tail: number | undefined;

  push(value: number): void;
  pop(): number | undefined;
  insertAt(value: number, index: number): void;
  removeAt(index: number): number | undefined;
  peak(): number | undefined;
  at(index: number): number | undefined;
  toArray(): number[];
  indexOf(value: number): number;
  values(): IterableIterator<number>;
}

export class DoubleLinkedList implements DLL {
  protected _length: number;
  protected _head: DLLNode | undefined;
  protected _tail: DLLNode | undefined;

  constructor() {
    this._length = 0;
  }

  push(value: number): void {
    const node: DLLNode = { value };

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

  pop(): number | undefined {
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

  private nodeAt(_index: number): DLLNode | undefined {
    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    let i = 0;
    let currentNode: DLLNode | undefined = this._head;

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

  at(index: number): number | undefined {
    const currentNode = this.nodeAt(index);
    return currentNode?.value;
  }

  insertAt(_index: number, value: number): void {
    if (!this._head) {
      return;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return;
    }

    const node: DLLNode = { value };
    const currentNode: DLLNode | undefined = this.nodeAt(index);
    const previousNode: DLLNode | undefined = currentNode?.prev;

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

  removeAt(_index: number): number | undefined {
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

  indexOf(value: number): number {
    let currentNode: DLLNode | undefined = this._head;
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

  toArray(): number[] {
    const array: number[] = [];
    let currentNode: DLLNode | undefined = this._head;
    while (currentNode !== undefined) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  peak(): number | undefined {
    return this._tail?.value;
  }

  *values(): IterableIterator<number> {
    let currentNode = this._head;
    while (currentNode !== undefined) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }

  get head(): number | undefined {
    return this._head?.value;
  }

  get tail(): number | undefined {
    return this._tail?.value;
  }

  get length(): number {
    return this._length;
  }
}
