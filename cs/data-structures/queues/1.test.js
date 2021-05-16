const FIFO = require('./1');

test('Test item enqueued is the same dequeued', function() {
    let fifo = new FIFO();
    fifo.enqueue(1);
    expect(fifo.dequeue()).toBe(1);
});

test('Test first item enqueued is the first dequeued', function() {
    let fifo = new FIFO();
    fifo.enqueue(1);
    fifo.enqueue(2);
    fifo.enqueue(3);
    expect(fifo.dequeue()).toBe(1);
});

test('Test we can peek the front of the queue', function() {
    let fifo = new FIFO();
    fifo.enqueue(1);
    fifo.enqueue(2);
    fifo.enqueue(3);
    expect(fifo.peek()).toBe(1);
});

test('Test we get undefined if we peek an empty queue', function() {
    let fifo = new FIFO();
    expect(fifo.peek()).toBeUndefined();
});

test('Test that the queue is empty when we do not have more items', function() {
    let fifo = new FIFO();
    fifo.enqueue(1);
    fifo.enqueue(2);
    fifo.dequeue();
    fifo.dequeue();
    expect(fifo.isEmpty()).toBeTruthy();
});

test('Test we get undefined if no more items in the queue', function() {
    let fifo = new FIFO();
    expect(fifo.dequeue()).toBeUndefined();
});