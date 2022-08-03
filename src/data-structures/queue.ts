export interface IQueue<TValue> {
  length: number;
  enqueue(value: TValue): void;
  dequeue(): TValue | undefined;
  read(): TValue | undefined;
}

export class Queue<TValue> implements IQueue<TValue> {
  protected _queue: TValue[] = [];

  constructor() {
    this._queue = [];
  }

  enqueue(value: TValue): void {
    this._queue.push(value);
  }

  dequeue(): TValue | undefined {
    return this._queue.shift();
  }

  read(): TValue | undefined {
    return this._queue[0];
  }

  get length(): number {
    return this._queue.length;
  }
}
