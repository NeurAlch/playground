export interface IStack<TValue> {
  length: number;

  isFull(): boolean;
  isEmpty(): boolean;
  push(value: TValue): void;
  pop(): TValue | undefined;
  read(): TValue | undefined;
  peek(): TValue | undefined;
  toArray(): Array<TValue | undefined>;
}

export class Stack<TValue> implements IStack<TValue> {
  protected _array: Array<TValue | undefined>;
  protected _maxSize: number;
  protected _topPointer: number;

  constructor(maxSize: number) {
    this._topPointer = -1;
    this._maxSize = maxSize;
    this._array = [];
  }

  peek(): TValue | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._array[this._topPointer];
  }

  pop(): TValue | undefined {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    const value = this._array[this._topPointer];
    this._array[this._topPointer] = undefined;
    this._topPointer--;
    return value;
  }

  read(): TValue | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._array[this._topPointer];
  }

  get length(): number {
    return this._topPointer + 1;
  }

  push(value: TValue): void {
    if (this.isFull()) {
      throw new Error('Stack is full');
    }
    this._topPointer++;
    this._array[this._topPointer] = value;
  }

  isEmpty(): boolean {
    return this._topPointer === -1;
  }

  isFull(): boolean {
    return this._topPointer + 1 === this._maxSize;
  }

  toArray(): Array<TValue | undefined> {
    return [...this._array];
  }
}
