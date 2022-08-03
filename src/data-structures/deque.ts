import { Queue } from './queue';

interface IDeque<TValue> extends Queue<TValue> {
  pop(): TValue | undefined;
  push(value: TValue): void;
  peekEnd(): TValue | undefined;
}

export class Deque<TValue> extends Queue<TValue> implements IDeque<TValue> {
  constructor() {
    super();
    this._queue = [];
  }

  pop(): TValue | undefined {
    return this._queue.pop();
  }

  push(value: TValue): void {
    this._queue.push(value);
  }

  peekEnd(): TValue | undefined {
    return this._queue[this._queue.length - 1];
  }
}
