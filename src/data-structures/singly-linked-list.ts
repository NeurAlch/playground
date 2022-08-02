interface SLLNode<VType> {
  value: VType;
  next?: SLLNode<VType>;
}

interface SLL<VType> {
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

export class SinglyLinkedList<VType> implements SLL<VType> {
  protected _length: number;
  protected _head: SLLNode<VType> | undefined;

  constructor() {
    this._length = 0;
  }

  push(value: VType): void {
    const node: SLLNode<VType> = { value };
    const [, currentNode] = this.pairAt(this.length - 1);
    if (currentNode === undefined) {
      this._head = node;
    } else {
      currentNode.next = node;
    }
    this._length++;
  }

  pop(): VType | undefined {
    if (this._head === undefined) {
      return undefined;
    }

    return this.removeAt(this.length - 1);
  }

  removeAt(_index: number): VType | undefined {
    if (!this._head) {
      return undefined;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    const [previousNode, currentNode] = this.pairAt(index);

    if (previousNode === undefined) {
      this._head = undefined;
    } else {
      previousNode.next = currentNode?.next;
    }

    this._length--;
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

    const node: SLLNode<VType> = { value };
    const [previousNode, currentNode] = this.pairAt(index);

    if (previousNode === undefined) {
      this._head = node;
    } else {
      previousNode.next = node;
    }

    this._length++;
    node.next = currentNode;
  }

  private pairAt(index: number): [SLLNode<VType> | undefined, SLLNode<VType> | undefined] {
    let i = 0;
    let previousNode: SLLNode<VType> | undefined;
    let currentNode: SLLNode<VType> | undefined = this._head;
    while (i < index) {
      previousNode = currentNode;
      currentNode = currentNode?.next;
      i++;
    }
    return [previousNode, currentNode];
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

  private nodeAt(_index: number): SLLNode<VType> | undefined {
    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    let i = 0;
    let currentNode: SLLNode<VType> | undefined = this._head;

    while (i < index) {
      currentNode = currentNode?.next;
      i++;
    }

    return currentNode;
  }

  at(_index: number): VType | undefined {
    const currentNode = this.nodeAt(_index);
    return currentNode?.value;
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

  peak(): VType | undefined {
    const currentNode = this.nodeAt(this.length - 1);
    return currentNode?.value;
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
    const tail = this.nodeAt(this.length - 1);
    return tail?.value;
  }

  get length(): number {
    return this._length;
  }
}
