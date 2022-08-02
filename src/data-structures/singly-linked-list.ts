interface SLLNode {
  value: number;
  next?: SLLNode;
}

interface SLL {
  head?: SLLNode;
  length: number;

  push(value: number): void;
  pop(): number | undefined;
  insertAt(value: number, index: number): void;
  removeAt(index: number): number | undefined;
  peak(): number | undefined;
  at(index: number): number | undefined;
  toArray(): number[];
  indexOf(value: number): number;
}

export class SinglyLinkedList implements SLL {
  protected _length: number;
  head: SLLNode | undefined;

  constructor() {
    this._length = 0;
  }

  push(value: number): void {
    const node: SLLNode = { value };
    const [, currentNode] = this.pairAt(this.length - 1);
    if (currentNode === undefined) {
      this.head = node;
    } else {
      currentNode.next = node;
    }
    this._length++;
  }

  pop(): number | undefined {
    if (this.head === undefined) {
      return undefined;
    }

    return this.removeAt(this.length - 1);
  }

  removeAt(index: number): number | undefined {
    if (index < 0 || index > this._length || !this.head) {
      return undefined;
    }

    const [previousNode, currentNode] = this.pairAt(index);

    if (previousNode === undefined) {
      this.head = undefined;
    } else {
      previousNode.next = currentNode?.next;
    }

    this._length--;
    return currentNode?.value;
  }

  insertAt(index: number, value: number): void {
    if (index < 0 || index > this._length || !this.head) {
      return;
    }

    const node: SLLNode = { value };
    const [previousNode, currentNode] = this.pairAt(index);

    if (previousNode === undefined) {
      this.head = node;
    } else {
      previousNode.next = node;
    }

    this._length++;
    node.next = currentNode;
  }

  private pairAt(index: number): [SLLNode | undefined, SLLNode | undefined] {
    let i = 0;
    let previousNode: SLLNode | undefined;
    let currentNode: SLLNode | undefined = this.head;
    while (i < index) {
      previousNode = currentNode;
      currentNode = currentNode?.next;
      i++;
    }
    return [previousNode, currentNode];
  }

  private nodeAt(_index: number): SLLNode | undefined {
    let index = _index;

    if (index > this._length) {
      return undefined;
    }

    if (index < 0) {
      index = this._length + index;
      if (index < 0) {
        return undefined;
      }
    }

    let i = 0;
    let currentNode: SLLNode | undefined = this.head;

    while (i < index) {
      currentNode = currentNode?.next;
      i++;
    }

    return currentNode;
  }

  at(_index: number): number | undefined {
    const currentNode = this.nodeAt(_index);
    return currentNode?.value;
  }

  toArray(): number[] {
    const array: number[] = [];
    let currentNode = this.head;
    while (currentNode !== undefined) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  indexOf(value: number): number {
    let i = 0;
    let currentNode = this.head;
    while (currentNode !== undefined) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.next;
      i++;
    }
    return -1;
  }

  peak(): number | undefined {
    const currentNode = this.nodeAt(this.length - 1);
    return currentNode?.value;
  }

  get length(): number {
    return this._length;
  }
}
