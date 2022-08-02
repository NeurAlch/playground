import { LinkedListBase, LL } from './base-linked-list';

interface LLNode<VType> {
  value: VType;
  next?: LLNode<VType>;
}

export class SinglyLinkedList<VType> extends LinkedListBase<VType, LLNode<VType>> implements LL<VType> {
  constructor() {
    super();
  }

  push(value: VType): void {
    const node: LLNode<VType> = { value };
    const [, currentNode] = this.pairAt(this.length - 1);
    if (currentNode === undefined) {
      this._head = node;
    } else {
      currentNode.next = node;
    }
    this._length++;
  }

  pop(): VType | undefined {
    if (this._head === undefined) {
      return undefined;
    }

    return this.removeAt(this.length - 1);
  }

  removeAt(_index: number): VType | undefined {
    if (!this._head) {
      return undefined;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return undefined;
    }

    const [previousNode, currentNode] = this.pairAt(index);

    if (previousNode === undefined) {
      this._head = undefined;
    } else {
      previousNode.next = currentNode?.next;
    }

    this._length--;
    return currentNode?.value;
  }

  insertAt(_index: number, value: VType): void {
    if (!this._head) {
      return;
    }

    const index = this.getIndex(_index);
    if (index === undefined) {
      return;
    }

    const node: LLNode<VType> = { value };
    const [previousNode, currentNode] = this.pairAt(index);

    if (previousNode === undefined) {
      this._head = node;
    } else {
      previousNode.next = node;
    }

    this._length++;
    node.next = currentNode;
  }

  private pairAt(index: number): [LLNode<VType> | undefined, LLNode<VType> | undefined] {
    let i = 0;
    let previousNode: LLNode<VType> | undefined;
    let currentNode: LLNode<VType> | undefined = this._head;
    while (i < index) {
      previousNode = currentNode;
      currentNode = currentNode?.next;
      i++;
    }
    return [previousNode, currentNode];
  }

  at(_index: number): VType | undefined {
    const currentNode = this.nodeAt(_index);
    return currentNode?.value;
  }

  peak(): VType | undefined {
    const currentNode = this.nodeAt(this.length - 1);
    return currentNode?.value;
  }

  get tail(): VType | undefined {
    const tail = this.nodeAt(this.length - 1);
    return tail?.value;
  }
}
