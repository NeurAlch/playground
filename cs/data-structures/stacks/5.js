// Implemented a Stack with a size limit

function StackOverflow() {}

const LIFO = function(max) {
    this.arr = [];
    this.maxSize = max;
}

LIFO.prototype.pop = function() {
    return this.arr.pop();
}

LIFO.prototype.push = function(value) {
    if (this.arr.length + 1 > this.maxSize) {
        throw new StackOverflow();
    }
    this.arr.push(value);
}

LIFO.prototype.peek = function(value) {
    return this.arr[this.arr.length - 1];
}

LIFO.prototype.isEmpty = function(value) {
    return this.arr.length === 0;
}

module.exports = {
    LIFO,
    StackOverflow,
};