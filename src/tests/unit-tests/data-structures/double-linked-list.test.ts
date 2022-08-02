import { DoubleLinkedList } from '../../../data-structures/double-linked-list';

describe('DoubleLinkedList', () => {
  it('should create an instance', () => {
    const dll = new DoubleLinkedList();
    expect(dll).toBeTruthy();
    expect(dll.length).toBe(0);
  });

  it('DLL.push() should add a node to the end of the list', () => {
    const dll = new DoubleLinkedList();
    expect(dll.length).toBe(0);
    expect(dll.toArray()).toEqual([]);
    dll.push(1);
    expect(dll.length).toBe(1);
    expect(dll.toArray()).toEqual([1]);
    dll.push(2);
    expect(dll.length).toBe(2);
    expect(dll.toArray()).toEqual([1, 2]);
    dll.push(3);
    expect(dll.length).toBe(3);
    expect(dll.toArray()).toEqual([1, 2, 3]);
  });
});
