import { SizedStack } from '../../../data-structures/sized-stack';

describe('Stack', () => {
  it('should create an instance', () => {
    const stack = new SizedStack(0);
    expect(stack).toBeInstanceOf(SizedStack);
    expect(stack.length).toBe(0);
    expect(stack.read()).toBeUndefined();
    expect(stack.delete()).toBeUndefined();
  });

  it('should push and pop values', () => {
    const stack = new SizedStack(3);
    stack.insert(1);
    stack.insert(2);
    stack.insert(3);
    expect(() => {
      stack.insert(4);
    }).toThrowError('Stack is full');
    expect(stack.length).toBe(3);
    expect(stack.read()).toBe(3);
    expect(stack.delete()).toBe(3);
    stack.insert(3);
    expect(() => {
      stack.insert(4);
    }).toThrowError('Stack is full');
    expect(stack.length).toBe(3);
    expect(stack.read()).toBe(3);
  });
});
