import { Deque } from './deque';

describe('Deque', () => {
  it('should create an instance', () => {
    const deque = new Deque<number>();
    expect(deque).toBeInstanceOf(Deque);
    expect(deque.length).toBe(0);
    expect(deque.read()).toBeUndefined();
  });

  it('should enqueue, dequeue, push and pop', () => {
    const deque = new Deque<number>();
    deque.enqueue(1);
    expect(deque.length).toBe(1);
    expect(deque.read()).toBe(1);
    deque.enqueue(2);
    expect(deque.length).toBe(2);
    expect(deque.read()).toBe(1);
    deque.enqueue(3);
    expect(deque.length).toBe(3);
    expect(deque.read()).toBe(1);
    expect(deque.readEnd()).toBe(3);

    // deque gets the first element
    expect(deque.dequeue()).toBe(1);
    expect(deque.length).toBe(2);
    expect(deque.read()).toBe(2);

    // pop gets the last element
    expect(deque.dequeueEnd()).toBe(3);
    expect(deque.length).toBe(1);

    deque.enqueueEnd(4);
    expect(deque.read()).toBe(2);
    expect(deque.readEnd()).toBe(4);
    expect(deque.dequeue()).toBe(2);
    expect(deque.dequeueEnd()).toBe(4);

    expect(deque.length).toBe(0);
    expect(deque.read()).toBeUndefined();
    expect(deque.dequeue()).toBeUndefined();
  });
});
