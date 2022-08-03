import { Queue } from './queue';

interface IDeque<TValue> extends Queue<TValue> {
  dequeueEnd(): TValue | undefined;
  enqueueEnd(value: TValue): void;
  readEnd(): TValue | undefined;
}

export class Deque<TValue> extends Queue<TValue> implements IDeque<TValue> {
  constructor() {
    super();
    this._queue = [];
  }

  dequeueEnd(): TValue | undefined {
    return this._queue.pop();
  }

  enqueueEnd(value: TValue): void {
    this._queue.push(value);
  }

  readEnd(): TValue | undefined {
    return this._queue[this._queue.length - 1];
  }
}
