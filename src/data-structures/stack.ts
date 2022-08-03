export interface IStack<TValue> {
  length: number;

  insert(value: TValue): void;
  delete(): TValue | undefined;
  read(): TValue | undefined;
}

export class Stack<TValue> implements IStack<TValue> {
  protected _array: TValue[];

  constructor() {
    this._array = [];
  }

  insert(value: TValue): void {
    this._array.push(value);
  }

  delete(): TValue | undefined {
    return this._array.pop();
  }

  read(): TValue | undefined {
    return this._array[this._array.length - 1];
  }

  get length(): number {
    return this._array.length;
  }
}
