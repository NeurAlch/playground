// Implementation without using array pop/push

const LIFO = function() {
    this.size = 0;
    this.arr = {};
}

LIFO.prototype.push = function(value) {
    this.size++;
    this.arr[this.size] = value;
}

LIFO.prototype.pop = function() {
    if (this.size === 0) {
        return undefined;
    }
    let tmp = this.arr[this.size];
    delete this.arr[this.size];
    this.size--;
    return tmp;
}

LIFO.prototype.peek = function(value) {
    return this.arr[this.size];
}

LIFO.prototype.isEmpty = function(value) {
    return this.size === 0;
}

module.exports = LIFO;