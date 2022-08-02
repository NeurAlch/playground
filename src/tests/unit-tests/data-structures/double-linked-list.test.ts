import { DoubleLinkedList } from '../../../data-structures/double-linked-list';

describe('DoubleLinkedList', () => {
  it('should create an instance', () => {
    const dll = new DoubleLinkedList();
    expect(dll).toBeTruthy();
    expect(dll.length).toBe(0);
    expect(dll.toArray()).toEqual([]);
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
    expect(dll.length).toBe(1);
    expect(dll.toArray()).toEqual([1]);
    expect(dll.pop()).toBe(1);
    expect(dll.length).toBe(0);
    expect(dll.toArray()).toEqual([]);
    expect(dll.pop()).toBe(undefined);
    expect(dll.length).toBe(0);
    expect(dll.toArray()).toEqual([]);
  });

  it('DLL.removeAt() should remove the node at the given index', () => {
    const dll = new DoubleLinkedList();
    expect(dll.removeAt(0)).toBe(undefined);
    expect(dll.length).toBe(0);
    expect(dll.toArray()).toEqual([]);

    dll.push(1);
    dll.push(2);
    expect(dll.head).toBe(1);
    expect(dll.tail).toBe(2);
    expect(dll.removeAt(1)).toBe(2);
    expect(dll.length).toBe(1);
    expect(dll.toArray()).toEqual([1]);
    expect(dll.head).toBe(1);
    expect(dll.tail).toBe(1);

    // removing the head leaves an empty list
    expect(dll.removeAt(0)).toBe(1);
    expect(dll.length).toBe(0);
    expect(dll.toArray()).toEqual([]);
    expect(dll.head).toBe(undefined);
    expect(dll.tail).toBe(undefined);

    // remove in the middle
    dll.push(1);
    dll.push(2);
    dll.push(3);
    expect(dll.head).toBe(1);
    expect(dll.tail).toBe(3);
    expect(dll.removeAt(1)).toBe(2);
    expect(dll.length).toBe(2);
    expect(dll.toArray()).toEqual([1, 3]);
    expect(dll.head).toBe(1);
    expect(dll.tail).toBe(3);

    // remove with negative index
    expect(dll.removeAt(-1)).toBe(3);
    expect(dll.length).toBe(1);
    expect(dll.toArray()).toEqual([1]);
    expect(dll.head).toBe(1);
    expect(dll.tail).toBe(1);

    // index greater than length returns undefined
    expect(dll.removeAt(10)).toBe(undefined);
    expect(dll.length).toBe(1);
    expect(dll.toArray()).toEqual([1]);
    expect(dll.head).toBe(1);
    expect(dll.tail).toBe(1);
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

  it('DLL.at() should return the value of the node at the given index', () => {
    const dll = new DoubleLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    expect(dll.at(0)).toBe(1);
    expect(dll.at(1)).toBe(2);
    expect(dll.at(2)).toBe(3);
    expect(dll.at(3)).toBe(undefined);
    expect(dll.at(-1)).toBe(3);
    expect(dll.at(-2)).toBe(2);
    expect(dll.at(-4)).toBe(undefined);
  });

  it('DLL.insertAt() should insert a node at the given index', () => {
    const dll = new DoubleLinkedList();
    dll.push(1);
    dll.push(3);
    expect(dll.toArray()).toEqual([1, 3]);
    dll.insertAt(1, 2);
    expect(dll.length).toBe(3);
    expect(dll.toArray()).toEqual([1, 2, 3]);
    dll.insertAt(0, 0);
    expect(dll.length).toBe(4);
    expect(dll.toArray()).toEqual([0, 1, 2, 3]);
    expect(dll.head).toBe(0);
    expect(dll.tail).toBe(3);

    // can't insert at index >= length
    dll.insertAt(4, 4);
    expect(dll.length).toBe(4);
    expect(dll.toArray()).toEqual([0, 1, 2, 3]);
    expect(dll.head).toBe(0);
    expect(dll.tail).toBe(3);

    dll.insertAt(dll.length - 1, 4);
    expect(dll.length).toBe(5);
    expect(dll.toArray()).toEqual([0, 1, 2, 4, 3]);
    expect(dll.head).toBe(0);
    expect(dll.tail).toBe(3);
  });

  it('DLL.indexOf() should return the index of the given value', () => {
    const dll = new DoubleLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    expect(dll.indexOf(1)).toBe(0);
    expect(dll.indexOf(2)).toBe(1);
    expect(dll.indexOf(3)).toBe(2);
    expect(dll.indexOf(4)).toBe(-1);
  });

  it('DLL.values() should return an iterator over the values of the list', () => {
    const dll = new DoubleLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    const values = dll.values();
    expect(values.next().value).toBe(1);
    expect(values.next().value).toBe(2);
    expect(values.next().value).toBe(3);
    expect(values.next().value).toBe(undefined);
  });
});
