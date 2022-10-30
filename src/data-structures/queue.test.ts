import { Queue } from './queue';

describe('Queue', () => {
  it('should create an instance', () => {
    const queue = new Queue<number>();
    expect(queue).toBeInstanceOf(Queue);
    expect(queue.length).toBe(0);
    expect(queue.read()).toBeUndefined();
  });

  it('should enqueue and dequeue', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    expect(queue.length).toBe(1);
    expect(queue.read()).toBe(1);
    queue.enqueue(2);
    expect(queue.length).toBe(2);
    expect(queue.read()).toBe(1);
    queue.enqueue(3);
    expect(queue.length).toBe(3);
    expect(queue.read()).toBe(1);

    expect(queue.dequeue()).toBe(1);
    expect(queue.length).toBe(2);
    expect(queue.read()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.length).toBe(1);
    expect(queue.read()).toBe(3);
    expect(queue.dequeue()).toBe(3);
    expect(queue.length).toBe(0);
    expect(queue.read()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
  });
});
