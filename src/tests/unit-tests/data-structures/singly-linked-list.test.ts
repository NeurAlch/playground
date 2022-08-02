import { SinglyLinkedList } from '../../../data-structures/singly-linked-list';

describe('SinglyLinkedList', () => {
  it('should create an instance', () => {
    const sll = new SinglyLinkedList();
    expect(sll).toBeTruthy();
    expect(sll.length).toBe(0);
    expect(sll.toArray()).toEqual([]);
  });

  it('SLL.push() should add a node to the end of the list', () => {
    const sll = new SinglyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    expect(sll.length).toBe(3);
    expect(sll.toArray()).toEqual([1, 2, 3]);
  });

  it('SLL.pop() should remove the last node from the list', () => {
    const sll = new SinglyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    expect(sll.length).toBe(3);
    expect(sll.toArray()).toEqual([1, 2, 3]);
    expect(sll.pop()).toBe(3);
    expect(sll.length).toBe(2);
    expect(sll.toArray()).toEqual([1, 2]);
    expect(sll.pop()).toBe(2);
    expect(sll.length).toBe(1);
    expect(sll.toArray()).toEqual([1]);
    expect(sll.pop()).toBe(1);
    expect(sll.length).toBe(0);
    expect(sll.toArray()).toEqual([]);
    expect(sll.pop()).toBe(undefined);
    expect(sll.length).toBe(0);
    expect(sll.toArray()).toEqual([]);
  });

  it('SLL.removeAt() should remove the node at the given index', () => {
    const sll = new SinglyLinkedList();
    sll.push(1);
    sll.push(2);
    expect(sll.removeAt(1)).toBe(2);
    expect(sll.length).toBe(1);
    expect(sll.toArray()).toEqual([1]);

    // removing the head leaves an empty list
    expect(sll.removeAt(0)).toBe(1);
    expect(sll.length).toBe(0);
    expect(sll.toArray()).toEqual([]);

    // remove in the middle
    sll.push(1);
    sll.push(2);
    sll.push(3);
    expect(sll.removeAt(1)).toBe(2);
    expect(sll.length).toBe(2);
    expect(sll.toArray()).toEqual([1, 3]);

    // negative value returns undefined
    expect(sll.removeAt(-1)).toBe(undefined);
    expect(sll.length).toBe(2);
    expect(sll.toArray()).toEqual([1, 3]);

    // index greater than length returns undefined
    expect(sll.removeAt(10)).toBe(undefined);
    expect(sll.length).toBe(2);
    expect(sll.toArray()).toEqual([1, 3]);
  });

  it('SLL.peak() should return the value of the last node', () => {
    const sll = new SinglyLinkedList();
    sll.push(1);
    sll.push(2);
    expect(sll.peak()).toBe(2);
    sll.pop();
    expect(sll.peak()).toBe(1);
    sll.pop();
    expect(sll.peak()).toBe(undefined);
  });

  it('SLL.at() should return the value of the node at the given index', () => {
    const sll = new SinglyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    expect(sll.at(0)).toBe(1);
    expect(sll.at(1)).toBe(2);
    expect(sll.at(2)).toBe(3);
    expect(sll.at(3)).toBe(undefined);
    expect(sll.at(-1)).toBe(3);
    expect(sll.at(-2)).toBe(2);
    expect(sll.at(-4)).toBe(undefined);
    expect(sll.at(10)).toBe(undefined);
  });

  it('SLL.insertAt() should insert a node at the given index', () => {
    const sll = new SinglyLinkedList();
    sll.push(1);
    sll.push(3);
    sll.insertAt(1, 2);
    expect(sll.length).toBe(3);
    expect(sll.toArray()).toEqual([1, 2, 3]);
    sll.insertAt(0, 0);
    expect(sll.length).toBe(4);
    expect(sll.toArray()).toEqual([0, 1, 2, 3]);
    sll.insertAt(4, 4);
    expect(sll.length).toBe(5);
    expect(sll.toArray()).toEqual([0, 1, 2, 3, 4]);
  });

  it('SLL.indexOf() should return the index of the given value', () => {
    const sll = new SinglyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    expect(sll.indexOf(1)).toBe(0);
    expect(sll.indexOf(2)).toBe(1);
    expect(sll.indexOf(3)).toBe(2);
    expect(sll.indexOf(4)).toBe(-1);
  });

  it('SLL.values() should return an iterator over the values of the list', () => {
    const sll = new SinglyLinkedList();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    const values = sll.values();
    expect(values.next().value).toBe(1);
    expect(values.next().value).toBe(2);
    expect(values.next().value).toBe(3);
    expect(values.next().value).toBe(undefined);
  });
});
