interface DLLNode {
  value: number;
  next?: DLLNode;
  prev?: DLLNode;
}

interface DLL {
  head?: DLLNode;
  tail?: DLLNode;
  length: number;

  //push(value: number): void;
  //pop(): number | undefined;
  //insertAt(value: number, index: number): void;
  //removeAt(index: number): number | undefined;
  //peak(): number | undefined;
  //at(index: number): number | undefined;
  //toArray(): number[];
  //indexOf(value: number): number;
  //values(): IterableIterator<number>;
}

export class DoubleLinkedList implements DLL {
  protected _length: number;

  constructor() {
    this._length = 0;
  }

  get length(): number {
    return this._length;
  }
}
