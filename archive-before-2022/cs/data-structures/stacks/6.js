class LIFO {
    constructor() {
        this.storage = [];
    }
    pop() {
        return this.storage.pop();
    }
    push(value) {
        this.storage.push(value);
    }
    isEmpty() {
        return this.storage.length === 0;
    }
    peek() {
        return this.storage[this.storage.length - 1];
    }
}

module.exports = LIFO;