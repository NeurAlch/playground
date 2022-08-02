import { DoubleLinkedList } from '../../../data-structures/double-linked-list';

describe('DoubleLinkedList', () => {
  it('should create an instance', () => {
    const dll = new DoubleLinkedList();
    expect(dll).toBeTruthy();
    expect(dll.length).toBe(0);
  });
});
