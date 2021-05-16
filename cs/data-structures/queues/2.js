function FIFO() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

function Node(value) {
    this.value = value;
    this.prev = null;
}

FIFO.prototype.enqueue = function(value) {

    // We save our current tail
    let tmp = this.tail;

    // We create a new tail
    let tail = new Node(value)

    // We set the prev value of our new tail to our last tail
    tail.prev = tmp;

    // We set our new tail
    this.tail = tail;

    if (this.head == null) {
        this.head = tail;
    }

}

FIFO.prototype.dequeue = function() {

    // We don't have a head yet
    if (this.head == null) {
        return undefined;
    }

    // We save our current head
    let head = this.head;
    
    // We get the one after our head
    let prev = head.prev;

    // We set our new head
    this.head = prev;
    
    // We return our last head value
    return head.value;

}

FIFO.prototype.peek = function() {
    if (this.head == null) {
        return undefined;
    }
    return this.head.value;
}

FIFO.prototype.isEmpty = function() {
    return this.head == null;
}

module.exports = FIFO;