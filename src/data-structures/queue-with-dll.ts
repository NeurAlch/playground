import { DoubleLinkedList } from './double-linked-list';

interface QueueWithDLL<VType> {
  length: number;

  read(): VType | undefined;
  dequeue(): VType | undefined;
  enqueue(value: VType): void;
  toArray(): VType[];
}

export class QueueWithDoubleLinkedList<VType> implements QueueWithDLL<VType> {
  protected _data: DoubleLinkedList<VType>;

  constructor() {
    this._data = new DoubleLinkedList<VType>();
  }

  enqueue(value: VType) {
    this._data.push(value);
  }

  dequeue(): VType | undefined {
    return this._data.shift();
  }

  read(): VType | undefined {
    return this._data.at(0);
  }

  toArray(): VType[] {
    return this._data.toArray();
  }

  get length(): number {
    return this._data.length;
  }
}
