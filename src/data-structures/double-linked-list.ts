interface DLLNode {
  value: number;
  next?: DLLNode;
  prev?: DLLNode;
}

interface DLL {
  length: number;

  push(value: number): void;
  //pop(): number | undefined;
  //insertAt(value: number, index: number): void;
  //removeAt(index: number): number | undefined;
  //peak(): number | undefined;
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

  toArray(): number[] {
    const array: number[] = [];
    let currentNode: DLLNode | undefined = this.head;
    while (currentNode !== undefined) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  get length(): number {
    return this._length;
  }
}
