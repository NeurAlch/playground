import { LinkedListBase, ILinkedList } from './base-linked-list';

export interface IDoubleLinkedListNode<TValue> {
  value: TValue;
  next?: IDoubleLinkedListNode<TValue>;
  prev?: IDoubleLinkedListNode<TValue>;
}

export class DoubleLinkedList<TValue>
  extends LinkedListBase<TValue, IDoubleLinkedListNode<TValue>>
  implements ILinkedList<TValue, IDoubleLinkedListNode<TValue>>
{
  protected _head: IDoubleLinkedListNode<TValue> | undefined;
  protected _tail: IDoubleLinkedListNode<TValue> | undefined;

  constructor() {
    super();
  }

  push(value: TValue): void {
    const node: IDoubleLinkedListNode<TValue> = { value };

    if (this._head === undefined || this._tail === undefined) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }

    this._length++;
  }

  pop(): TValue | undefined {
    if (this._head === undefined || this._tail === undefined) {
      return undefined;
    }

    const node = this._tail;
    this._tail = this._tail.prev;
    if (this._tail === undefined) {
      this._head = undefined;
    } else {
      this._tail.next = undefined;
    }

    this._length--;
    return node.value;
  }

  removeAt(_index: number): TValue | undefined {
    if (!this._head || !this._tail) {
      return undefined;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    const currentNode = this.nodeAt(index);
    if (currentNode === undefined) {
      return undefined;
    }

    const previousNode = currentNode.prev;
    const nextNode = currentNode.next;

    if (previousNode === undefined) {
      this._head = nextNode;
    } else {
      previousNode.next = nextNode;
    }

    if (nextNode === undefined) {
      this._tail = previousNode;
    } else {
      nextNode.prev = previousNode;
    }

    this._length--;
    return currentNode.value;
  }

  insertAt(_index: number, value: TValue): void {
    if (!this._head) {
      return;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return;
    }

    const node: IDoubleLinkedListNode<TValue> = { value };
    const currentNode: IDoubleLinkedListNode<TValue> | undefined = this.nodeAt(index);
    const previousNode: IDoubleLinkedListNode<TValue> | undefined = currentNode?.prev;

    if (previousNode === undefined) {
      this._head = node;
    } else {
      previousNode.next = node;
    }

    if (currentNode !== undefined) {
      currentNode.prev = node;
    }

    this._length++;
    node.next = currentNode;
  }

  shift(): TValue | undefined {
    return this.removeAt(0);
  }

  at(_index: number): TValue | undefined {
    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    const currentNode = this.nodeAt(index);
    return currentNode?.value;
  }

  peak(): TValue | undefined {
    return this._tail?.value;
  }

  get tail(): TValue | undefined {
    return this._tail?.value;
  }

  get tailNode(): IDoubleLinkedListNode<TValue> | undefined {
    return this._tail;
  }

  set tailNode(node: IDoubleLinkedListNode<TValue> | undefined) {
    this._tail = node;
  }
}
