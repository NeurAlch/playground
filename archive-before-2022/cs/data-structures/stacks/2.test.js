// Using an array as the stack

test('Test item we push is the same item we pop', function() {
    let lifo = [];
    lifo.push(1);
    expect(lifo.pop()).toBe(1);
});

test('Test last one in is first one out', function() {
    let lifo = [];
    lifo.push(1);
    lifo.push(2);
    lifo.push(3);
    expect(lifo.pop()).toBe(3);
    expect(lifo.pop()).toBe(2);
    expect(lifo.pop()).toBe(1);
});

test('Test that the stack is empty when we do not have more items', function() {
    let lifo = [];
    lifo.push(1);
    lifo.push(2);
    lifo.pop();
    lifo.pop();
    expect(lifo.length === 0).toBeTruthy();
});

test('Test we get undefined if no more items in the stack', function() {
    let lifo = [];
    expect(lifo.pop()).toBeUndefined();
});