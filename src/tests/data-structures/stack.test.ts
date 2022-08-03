import { Stack } from '../../data-structures/stack';

describe('Stack', () => {
  it('should create an instance', () => {
    const stack = new Stack(10);
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.length).toBe(0);
    expect(stack.read()).toBeUndefined();
  });

  it('should push and pop values', () => {
    const stack = new Stack(10);
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
  });

  it('should throw error for overflow or underflow', () => {
    const stack = new Stack(3);
    expect(stack.isFull()).toBe(false);
    stack.insert(1);
    stack.insert(2);
    stack.insert(3);
    expect(stack.isFull()).toBe(true);
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
    expect(stack.isEmpty()).toBe(false);
    stack.delete();
    stack.delete();
    stack.delete();
    expect(stack.isEmpty()).toBe(true);
    expect(() => {
      stack.delete();
    }).toThrowError('Stack is empty');
    expect(stack.length).toBe(0);
    expect(stack.read()).toBeUndefined();
  });
});
