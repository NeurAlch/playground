import { Stack } from '../../../data-structures/stack';

describe('Stack', () => {
  it('should create an instance', () => {
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.length).toBe(0);
    expect(stack.read()).toBeUndefined();
    expect(stack.delete()).toBeUndefined();
  });

  it('should push and pop values', () => {
    const stack = new Stack();
    stack.insert(1);
    expect(stack.length).toBe(1);
    expect(stack.delete()).toBe(1);
    expect(stack.length).toBe(0);
    stack.insert(1);
    stack.insert(2);
    expect(stack.read()).toBe(2);
    expect(stack.length).toBe(2);

    expect(stack.delete()).toBe(2);
    expect(stack.read()).toBe(1);
    expect(stack.length).toBe(1);
    expect(stack.delete()).toBe(1);
    expect(stack.length).toBe(0);
    expect(stack.read()).toBe(undefined);
    expect(stack.delete()).toBe(undefined);
  });
});
