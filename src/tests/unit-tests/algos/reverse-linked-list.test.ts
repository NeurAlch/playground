import { SinglyLinkedList } from '../../../data-structures/singly-linked-list';
import { reverseLinkedList, reverseLinkedListRecursive } from '../../../algos/reverse-linked-list';

describe('reverse linked list', () => {
  it('reverses a linked list iteratively', () => {
    const sll = new SinglyLinkedList<number>();
    sll.push(3);
    sll.push(2);
    sll.push(1);
    sll.push(0);
    reverseLinkedList(sll);
    expect(sll.toArray()).toEqual([0, 1, 2, 3]);
  });

  it('reverses a linked list recursively', () => {
    const sll = new SinglyLinkedList<number>();
    sll.push(0);
    sll.push(1);
    sll.push(2);
    sll.push(3);
    reverseLinkedListRecursive(sll);
    expect(sll.toArray()).toEqual([3, 2, 1, 0]);
  });
});
