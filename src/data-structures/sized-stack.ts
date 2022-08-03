import { IStack, Stack } from './stack';

export class SizedStack<TValue> extends Stack<TValue> implements IStack<TValue> {
  protected _array: TValue[];
  protected _maxSize: number;

  constructor(maxSize: number) {
    super();
    this._array = [];
    this._maxSize = maxSize;
  }

  insert(value: TValue): void {
    if (this._array.length >= this._maxSize) {
      throw new Error('Stack is full');
    }
    this._array.push(value);
  }
}
