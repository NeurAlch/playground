
const FIFO = function() {
    this.arr = [];
}

FIFO.prototype.dequeue = function() {
    return this.arr.shift();
}

FIFO.prototype.enqueue = function(value) {
    this.arr.push(value);
}

FIFO.prototype.peek = function(value) {
    return this.arr[0];
}

FIFO.prototype.isEmpty = function(value) {
    return this.arr.length === 0;
}

module.exports = FIFO;