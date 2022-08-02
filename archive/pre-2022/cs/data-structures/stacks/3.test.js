const LIFO = require('./3');

test('Test item we push is the same item we pop', function() {
    let lifo = new LIFO();
    lifo.push(1);
    expect(lifo.pop()).toBe(1);
});

test('Test last one in is first one out', function() {
    let lifo = new LIFO();
    lifo.push(1);
    lifo.push(2);
    lifo.push(3);
    expect(lifo.pop()).toBe(3);
    expect(lifo.pop()).toBe(2);
    expect(lifo.pop()).toBe(1);
});

test('Test we can peek the last value pushed', function() {
    let lifo = new LIFO();
    lifo.push('one');
    lifo.push('two');
    expect(lifo.peek()).toBe('two');
    expect(lifo.peek()).toBe('two');
});

test('Test that the stack is empty when we do not have more items', function() {
    let lifo = new LIFO();
    lifo.push(1);
    lifo.push(2);
    lifo.pop();
    lifo.pop();
    expect(lifo.isEmpty()).toBeTruthy();
});

test('Test we get undefined if no more items in the stack', function() {
    let lifo = new LIFO();
    expect(lifo.pop()).toBeUndefined();
});