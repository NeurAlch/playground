import { IDoubleLinkedListNode, DoubleLinkedList } from '../data-structures/double-linked-list';

/*
 * [head] 1 -> 2 -> 3 -> 4 -> 5 -> null [tail]
 * [tail] null <- 1 <- 2 <- 3 <- 4 <- 5 [head]
 */
export const reverseDoubleLinkedList = (dll: DoubleLinkedList<number>): void => {
  if (!dll.head) {
    return;
  }

  const firstNode = dll.headNode;
  let pointer: IDoubleLinkedListNode<number> | undefined = dll.headNode;
  let newNext: IDoubleLinkedListNode<number> | undefined;

  while (pointer) {
    /* with tmp variables
    const tmpNext = pointer.next;
    pointer.next = newNext;
    pointer.prev = tmpNext;
    newNext = pointer;
    pointer = tmpNext;
    */
    [pointer.prev, pointer.next, newNext, pointer] = [pointer.next, pointer.prev, pointer, pointer.next];
  }

  dll.headNode = newNext;
  dll.tailNode = firstNode;
};
