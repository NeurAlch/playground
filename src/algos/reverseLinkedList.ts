import { ILinkedListNode, SinglyLinkedList } from '../data-structures/singly-linked-list';

// We switch where the nodes are pointing to
// [old head] 3 -> 2 -> 1 -> 0 -> null
//         null <- 3 <- 2 <- 1 <- 0 [new head]
export const reverseLinkedList = (sll: SinglyLinkedList<number>): void => {
  if (sll.length === 0 || !sll.headNode) {
    return;
  }

  let newNext: ILinkedListNode<number> | undefined;
  let pointer: ILinkedListNode<number> | undefined = sll.headNode;

  while (pointer) {
    /* with a tmp variable
    const tmpNext: LLNode<number> | undefined = pointer.next;
    pointer.next = newNext;
    newNext = pointer;
    pointer = tmpNext;
    */
    [pointer.next, newNext, pointer] = [newNext, pointer, pointer.next];
  }

  sll.headNode = newNext;
};

export const reverseLinkedListRecursive = (sll: SinglyLinkedList<number>): void => {
  const head = sll.headNode;

  // convert the while loop into a recursive function
  const recursiveReverse = (pointer: ILinkedListNode<number> | undefined, newNext: ILinkedListNode<number> | undefined): ILinkedListNode<number> | undefined => {
    if (!pointer) {
      return newNext;
    }
    [pointer.next, newNext, pointer] = [newNext, pointer, pointer.next];
    return recursiveReverse(pointer, newNext);
  };

  sll.headNode = recursiveReverse(head, undefined);
};
