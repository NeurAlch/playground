interface DLLNode {
  value: number;
  next?: DLLNode;
  prev?: DLLNode;
}

interface DLL {
  length: number;

  push(value: number): void;
  pop(): number | undefined;
  //insertAt(value: number, index: number): void;
  //removeAt(index: number): number | undefined;
  peak(): number | undefined;
  //at(index: number): number | undefined;
  toArray(): number[];
  //indexOf(value: number): number;
  //values(): IterableIterator<number>;
}

export class DoubleLinkedList implements DLL {
  protected _length: number;
  protected head: DLLNode | undefined;
  protected tail: DLLNode | undefined;

  constructor() {
    this._length = 0;
  }

  push(value: number): void {
    const node: DLLNode = { value };

    if (this.head === undefined || this.tail === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this._length++;
  }

  pop(): number | undefined {
    if (this.head === undefined || this.tail === undefined) {
      return undefined;
    }

    const node = this.tail;
    this.tail = this.tail.prev;
    if (this.tail === undefined) {
      this.head = undefined;
    } else {
      this.tail.next = undefined;
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
    let currentNode: DLLNode | undefined = this.head;

    while (i < index) {
      currentNode = currentNode?.next;
      i++;
    }

    return currentNode;
  }

  private getIndex(_index: number): number | undefined {
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

    return index;
  }

  toArray(): number[] {
    const array: number[] = [];
    let currentNode: DLLNode | undefined = this.head;
    while (currentNode !== undefined) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  peak(): number | undefined {
    return this.tail?.value;
  }

  get length(): number {
    return this._length;
  }
}
