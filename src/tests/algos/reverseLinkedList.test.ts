import { SinglyLinkedList } from '../../data-structures/singly-linked-list';
import { reverseLinkedList, reverseLinkedListRecursive } from '../../algos/reverseLinkedList';

describe('reverse linked list', () => {
  it('reverses a linked list iteratively', () => {
    const sll = new SinglyLinkedList<number>();
    sll.push(3);
    sll.push(2);
    sll.push(1);
    sll.push(0);
    expect(sll.toArray()).toEqual([3, 2, 1, 0]);
    expect(sll.head).toBe(3);
    reverseLinkedList(sll);
    expect(sll.toArray()).toEqual([0, 1, 2, 3]);
    expect(sll.head).toBe(0);

    const sll2 = new SinglyLinkedList<number>();
    sll2.push(3);
    expect(sll2.toArray()).toEqual([3]);
    reverseLinkedList(sll2);
    expect(sll2.toArray()).toEqual([3]);

    const sll3 = new SinglyLinkedList<number>();
    expect(sll3.toArray()).toEqual([]);
    reverseLinkedList(sll3);
    expect(sll3.toArray()).toEqual([]);
  });

  it('reverses a linked list recursively', () => {
    const sll = new SinglyLinkedList<number>();
    sll.push(0);
    sll.push(1);
    sll.push(2);
    sll.push(3);
    reverseLinkedListRecursive(sll);
    expect(sll.toArray()).toEqual([3, 2, 1, 0]);

    const sll2 = new SinglyLinkedList<number>();
    sll2.push(3);
    reverseLinkedListRecursive(sll2);
    expect(sll2.toArray()).toEqual([3]);

    const sll3 = new SinglyLinkedList<number>();
    reverseLinkedListRecursive(sll3);
    expect(sll3.toArray()).toEqual([]);
  });
});
