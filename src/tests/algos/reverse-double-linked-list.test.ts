import { DoubleLinkedList } from '../../data-structures/double-linked-list';
import { reverseDoubleLinkedList } from '../../algos/reverse-double-linked-list';

describe('reverse double linked list', () => {
  it('reverses a double linked list iteratively', () => {
    const dll = new DoubleLinkedList<number>();
    dll.push(3);
    dll.push(2);
    dll.push(1);
    expect(dll.toArray()).toEqual([3, 2, 1]);
    expect(dll.head).toBe(3);
    expect(dll.tail).toBe(1);
    reverseDoubleLinkedList(dll);
    expect(dll.toArray()).toEqual([1, 2, 3]);
    expect(dll.head).toBe(1);
    expect(dll.tail).toBe(3);

    const dll2 = new DoubleLinkedList<number>();
    dll2.push(3);
    expect(dll2.toArray()).toEqual([3]);
    reverseDoubleLinkedList(dll2);
    expect(dll2.toArray()).toEqual([3]);

    const dll3 = new DoubleLinkedList<number>();
    expect(dll3.toArray()).toEqual([]);
    reverseDoubleLinkedList(dll3);
    expect(dll3.toArray()).toEqual([]);
  });
});
