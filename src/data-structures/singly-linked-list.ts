import { LinkedListBase, ILinkedList } from './base-linked-list';

export interface ILinkedListNode<VType> {
  value: VType;
  next?: ILinkedListNode<VType>;
}

export class SinglyLinkedList<TValue>
  extends LinkedListBase<TValue, ILinkedListNode<TValue>>
  implements ILinkedList<TValue, ILinkedListNode<TValue>>
{
  constructor() {
    super();
  }

  push(value: TValue): void {
    const node: ILinkedListNode<TValue> = { value };
    const [, currentNode] = this.pairAt(this.length - 1);
    if (currentNode === undefined) {
      this._head = node;
    } else {
      currentNode.next = node;
    }
    this._length++;
  }

  pop(): TValue | undefined {
    if (this._head === undefined) {
      return undefined;
    }

    return this.removeAt(this.length - 1);
  }

  removeAt(_index: number): TValue | undefined {
    if (!this._head) {
      return undefined;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    const [previousNode, currentNode] = this.pairAt(index);

    if (previousNode === undefined) {
      this._head = currentNode?.next;
    } else {
      previousNode.next = currentNode?.next;
    }

    this._length--;
    return currentNode?.value;
  }

  insertAt(_index: number, value: TValue): void {
    if (!this._head) {
      return;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return;
    }

    const node: ILinkedListNode<TValue> = { value };
    const [previousNode, currentNode] = this.pairAt(index);

    if (previousNode === undefined) {
      this._head = node;
    } else {
      previousNode.next = node;
    }

    this._length++;
    node.next = currentNode;
  }

  private pairAt(index: number): [ILinkedListNode<TValue> | undefined, ILinkedListNode<TValue> | undefined] {
    let i = 0;
    let previousNode: ILinkedListNode<TValue> | undefined;
    let currentNode: ILinkedListNode<TValue> | undefined = this._head;
    while (i < index) {
      previousNode = currentNode;
      currentNode = currentNode?.next;
      i++;
    }
    return [previousNode, currentNode];
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
    const currentNode = this.nodeAt(this.length - 1);
    return currentNode?.value;
  }

  get tail(): TValue | undefined {
    const tail = this.nodeAt(this.length - 1);
    return tail?.value;
  }
}
