import { Stack } from './stack';

describe('Stack', () => {
  it('should create an instance', () => {
    const stack = new Stack(10);
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.length).toBe(0);
    expect(stack.toArray().length).toBe(0);
    expect(stack.read()).toBeUndefined();
  });

  it('should push and pop values', () => {
    const stack = new Stack(10);
    stack.push(1);
    expect(stack.length).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.length).toBe(0);
    stack.push(1);
    stack.push(2);
    expect(stack.read()).toBe(2);
    expect(stack.length).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.read()).toBe(1);
    expect(stack.length).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.length).toBe(0);
    expect(stack.read()).toBe(undefined);
  });

  it('should peek', () => {
    const stack = new Stack(3);
    expect(stack.peek()).toBeUndefined();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(1);
    stack.pop();
    expect(stack.peek()).toBeUndefined();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('should throw error for overflow or underflow', () => {
    const stack = new Stack(3);
    expect(stack.isFull()).toBe(false);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isFull()).toBe(true);
    expect(() => {
      stack.push(4);
    }).toThrowError('Stack is full');
    expect(stack.toArray()).toEqual([1, 2, 3]);
    expect(stack.length).toBe(3);
    expect(stack.read()).toBe(3);
    expect(stack.pop()).toBe(3);
    stack.push(3);
    expect(() => {
      stack.push(4);
    }).toThrowError('Stack is full');
    expect(stack.length).toBe(3);
    expect(stack.read()).toBe(3);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.toArray()).toEqual([1, 2, undefined]);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    expect(() => {
      stack.pop();
    }).toThrowError('Stack is empty');
    expect(stack.length).toBe(0);
    expect(stack.read()).toBeUndefined();
    expect(stack.toArray()).toEqual([undefined, undefined, undefined]);
  });
});
