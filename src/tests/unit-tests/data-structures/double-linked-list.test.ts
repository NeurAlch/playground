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

  it('DLL.pop() should remove the last node from the list', () => {
    const dll = new DoubleLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    expect(dll.length).toBe(3);
    expect(dll.toArray()).toEqual([1, 2, 3]);
    expect(dll.pop()).toBe(3);
    expect(dll.length).toBe(2);
    expect(dll.toArray()).toEqual([1, 2]);
    expect(dll.pop()).toBe(2);
    expect(dll.pop()).toBe(1);
    expect(dll.pop()).toBe(undefined);
    expect(dll.length).toBe(0);
    expect(dll.toArray()).toEqual([]);
  });

  it('DLL.peak() should return the value of the last node', () => {
    const dll = new DoubleLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    expect(dll.peak()).toBe(3);
    dll.pop();
    dll.pop();
    dll.pop();
    expect(dll.peak()).toBe(undefined);
  });
});
