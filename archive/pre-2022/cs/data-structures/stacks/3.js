const LIFO = function() {
    this.top = null;
    this.size = 0;
}

const Node = function(value) {
    this.value = value;
    this.prev = null;
}

LIFO.prototype.push = function(value) {

    // Create the new node
    let node = new Node(value);
    
    // Set the top to be the one before our new node
    node.prev = this.top;

    // Set the top to be our new node
    this.top = node;

    // Increase the size of our stack
    this.size += 1;

    // Return our new node as the top of the stack
    return node.value;

}

LIFO.prototype.pop = function(value) {

    // If we don't have more values return undefined.
    // We could also throw a underflow exception here
    // but we are imitating Array.pop
    if (this.size === 0) {
        return undefined;
    }

    // Get our top value to return
    let tmp = this.top;

    // Set our top to be the prev one
    this.top = this.top.prev;

    // Decrease the size
    this.size -= 1;

    // Return our last top node
    return tmp.value;

}

LIFO.prototype.peek = function() {
    return this.top.value;
}

LIFO.prototype.isEmpty = function() {
    return this.size === 0;
}

module.exports = LIFO;