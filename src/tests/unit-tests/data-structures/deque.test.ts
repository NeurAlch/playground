import { Deque } from '../../../data-structures/deque';

describe('Deque', () => {
  it('should create an instance', () => {
    const deque = new Deque<number>();
    expect(deque).toBeInstanceOf(Deque);
    expect(deque.length).toBe(0);
    expect(deque.peek()).toBeUndefined();
  });

  it('should enqueue, dequeue, push and pop', () => {
    const deque = new Deque<number>();
    deque.enqueue(1);
    expect(deque.length).toBe(1);
    expect(deque.peek()).toBe(1);
    deque.enqueue(2);
    expect(deque.length).toBe(2);
    expect(deque.peek()).toBe(1);
    deque.enqueue(3);
    expect(deque.length).toBe(3);
    expect(deque.peek()).toBe(1);
    expect(deque.peekEnd()).toBe(3);

    // deque gets the first element
    expect(deque.dequeue()).toBe(1);
    expect(deque.length).toBe(2);
    expect(deque.peek()).toBe(2);

    // pop gets the last element
    expect(deque.pop()).toBe(3);
    expect(deque.length).toBe(1);

    deque.push(4);
    expect(deque.peek()).toBe(2);
    expect(deque.peekEnd()).toBe(4);
    expect(deque.dequeue()).toBe(2);
    expect(deque.pop()).toBe(4);

    expect(deque.length).toBe(0);
    expect(deque.peek()).toBeUndefined();
    expect(deque.dequeue()).toBeUndefined();
  });
});
