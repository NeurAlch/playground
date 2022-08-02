const stack = require('./5');

const LIFO = stack.LIFO;
const StackOverflow = stack.StackOverflow;

test('Test item we push is the same item we pop', function() {
    let lifo = new LIFO(1);
    lifo.push(1);
    expect(lifo.pop()).toBe(1);
});

test('Test last one in is first one out', function() {
    let lifo = new LIFO(3);
    lifo.push(1);
    lifo.push(2);
    lifo.push(3);
    expect(lifo.pop()).toBe(3);
    expect(lifo.pop()).toBe(2);
    expect(lifo.pop()).toBe(1);
});

test('Test we can peek the last value pushed', function() {
    let lifo = new LIFO(2);
    lifo.push('one');
    lifo.push('two');
    expect(lifo.peek()).toBe('two');
    expect(lifo.peek()).toBe('two');
});

test('Test that the stack is empty when we do not have more items', function() {
    let lifo = new LIFO(2);
    lifo.push(1);
    lifo.push(2);
    lifo.pop();
    lifo.pop();
    expect(lifo.isEmpty()).toBeTruthy();
});

test('Test we get undefined if no more items in the stack', function() {
    let lifo = new LIFO(0);
    expect(lifo.pop()).toBeUndefined();
});

test('Test we get a StackOverflow exception if we push too much items', function() {
    let lifo = new LIFO(2);
    lifo.push(1);
    lifo.push(1);
    expect(() => { lifo.push(1) }).toThrow(StackOverflow)
});
