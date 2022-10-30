import { QueueWithDoubleLinkedList } from './queue-with-dll';

type TaskType = 'wake-up' | 'breakfast' | 'work' | 'lunch' | 'dinner' | 'sleep';

describe('QueueWithDLL', () => {
  it('should create an instance', () => {
    const queue = new QueueWithDoubleLinkedList<TaskType>();
    expect(queue).toBeTruthy();
    expect(queue.length).toBe(0);
    expect(queue.toArray()).toEqual([]);
  });

  it('should enqueue', () => {
    const queue = new QueueWithDoubleLinkedList<TaskType>();
    expect(queue.toArray()).toEqual([]);
    expect(queue.length).toBe(0);
    queue.enqueue('wake-up');
    expect(queue.length).toBe(1);
    queue.enqueue('breakfast');
    expect(queue.length).toBe(2);
    expect(queue.toArray()).toEqual(['wake-up', 'breakfast']);
  });

  it('should dequeue', () => {
    const queue = new QueueWithDoubleLinkedList<TaskType>();
    expect(queue.length).toBe(0);
    queue.enqueue('wake-up');
    expect(queue.length).toBe(1);
    queue.enqueue('work');
    expect(queue.length).toBe(2);
    expect(queue.toArray()).toEqual(['wake-up', 'work']);
    expect(queue.dequeue()).toBe('wake-up');
    expect(queue.length).toBe(1);
    expect(queue.dequeue()).toBe('work');
    expect(queue.length).toBe(0);
    expect(queue.toArray()).toEqual([]);
  });
});
