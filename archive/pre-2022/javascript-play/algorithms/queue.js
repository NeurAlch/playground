test("Implement a Queue", function() {

    'use strict';

    var Queue = function(data) {

        var self = this;
        var first = new Node(data);
        var last = first;

        self.enqueue = function(d) {
            var n = new Node(d);
            if (first === null) {
                first = n;
                last = first;
                return;
            }
            last.next = n;
            last = n;
        };

        self.dequeue = function() {
            if (first === null) return null;
            var d = first.data;
            var n = first.next;
            first = n;
            return d;
        };

    };

    var Node = function(data) {
        var self = this;
        self.data = data;
        self.next = null;
    };

    var q_1 = new Queue(1);

    q_1.enqueue(2);

    strictEqual(q_1.dequeue(), 1);
    strictEqual(q_1.dequeue(), 2);
    strictEqual(q_1.dequeue(), null);

    q_1.enqueue(1);
    q_1.enqueue(2);
    q_1.enqueue(3);
    q_1.enqueue(4);
    q_1.enqueue(5);

    strictEqual(q_1.dequeue(), 1);
    strictEqual(q_1.dequeue(), 2);
    strictEqual(q_1.dequeue(), 3);
    strictEqual(q_1.dequeue(), 4);
    strictEqual(q_1.dequeue(), 5);
    strictEqual(q_1.dequeue(), null);

    q_1.enqueue(1);
    strictEqual(q_1.dequeue(), 1);
    strictEqual(q_1.dequeue(), null);

    q_1.enqueue(1);
    strictEqual(q_1.dequeue(), 1);
    q_1.enqueue(2);
    strictEqual(q_1.dequeue(), 2);
    strictEqual(q_1.dequeue(), null);
    strictEqual(q_1.dequeue(), null);

});