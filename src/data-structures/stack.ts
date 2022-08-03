interface IStack<TValue> {
  length: number;

  push(value: TValue): void;
  pop(): TValue | undefined;
  peek(): TValue | undefined;
}

export class Stack<TValue> implements IStack<TValue> {
  protected _array: TValue[];

  constructor() {
    this._array = [];
  }

  push(value: TValue): void {
    this._array.push(value);
  }

  pop(): TValue | undefined {
    return this._array.pop();
  }

  peek(): TValue | undefined {
    return this._array[this._array.length - 1];
  }

  get length(): number {
    return this._array.length;
  }
}
