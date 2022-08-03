import { LinkedListBase, LL } from './base-linked-list';

export interface DLLNode<VType> {
  value: VType;
  next?: DLLNode<VType>;
  prev?: DLLNode<VType>;
}

export class DoubleLinkedList<VType> extends LinkedListBase<VType, DLLNode<VType>> implements LL<VType, DLLNode<VType>> {
  protected _head: DLLNode<VType> | undefined;
  protected _tail: DLLNode<VType> | undefined;

  constructor() {
    super();
  }

  push(value: VType): void {
    const node: DLLNode<VType> = { value };

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

  pop(): VType | undefined {
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

  removeAt(_index: number): VType | undefined {
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

  insertAt(_index: number, value: VType): void {
    if (!this._head) {
      return;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return;
    }

    const node: DLLNode<VType> = { value };
    const currentNode: DLLNode<VType> | undefined = this.nodeAt(index);
    const previousNode: DLLNode<VType> | undefined = currentNode?.prev;

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

  shift(): VType | undefined {
    return this.removeAt(0);
  }

  at(_index: number): VType | undefined {
    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    const currentNode = this.nodeAt(index);
    return currentNode?.value;
  }

  peak(): VType | undefined {
    return this._tail?.value;
  }

  get tail(): VType | undefined {
    return this._tail?.value;
  }

  get tailNode(): DLLNode<VType> | undefined {
    return this._tail;
  }

  set tailNode(node: DLLNode<VType> | undefined) {
    this._tail = node;
  }
}
