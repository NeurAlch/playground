import { Stack } from '../../../data-structures/stack';

describe('Stack', () => {
  it('should create an instance', () => {
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.length).toBe(0);
    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
  });

  it('should push and pop values', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.length).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.length).toBe(0);
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.length).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
    expect(stack.length).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.length).toBe(0);
    expect(stack.peek()).toBe(undefined);
    expect(stack.pop()).toBe(undefined);
  });
});
