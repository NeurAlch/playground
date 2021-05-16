const LIFO = function() {
    this.arr = [];
}

LIFO.prototype.pop = function() {
    return this.arr.pop();
}

LIFO.prototype.push = function(value) {
    this.arr.push(value);
}

LIFO.prototype.peek = function(value) {
    return this.arr[this.arr.length - 1];
}

LIFO.prototype.isEmpty = function(value) {
    return this.arr.length === 0;
}

module.exports = LIFO;