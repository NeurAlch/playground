test('Implement a Singly Linked List', function() {

    'use strict';

    var Node = function(data) {
        var self = this;
        self.data = data;
        self.next = null;
        return self;
    };

    var LinkedList = function(data) {

        var self = this;

        self.head = new Node(data);

        self.find = function(d) {
            var current = self.head;
            while (current !== null && current.data !== d) {
                current = current.next;
            }
            return current;
        };

        self.insert = function(d, v) {
            var n = new Node(v);
            var found = self.find(d);
            if (found !== null) {
                n.next = found.next;
                found.next = n;
                return n;
            }
            return null;
        };

        self.delete = function(d) {

            // Check if the head has the value to delete
            if (self.head.data === d) {
                // Check if our linked list has only one node
                if (self.head.next === null) {
                    self.head = new Node();
                    return;
                }
                self.head = self.head.next;
                return;
            }

            var current = self.head;
            var prev = null;

            while (current !== null && current.data !== d) {
                prev = current;
                current = current.next;
            }

            prev.next = current.next;

        };

        self.toString = function() {
            var s = '';
            var current = self.head;
            while (current !== null && current.next !== null) {
                s += current.data;
                current = current.next;
            }
            s += current.data;
            return s;
        };

        // Implemented without a buffer
        self.order = function() {
            var current = self.head;
            while (current !== null && current.next !== null) {
                if (current.data > current.next.data) {
                    var c = current.next.data;
                    current.next.data = current.data;
                    current.data = c;
                    // restart from the head
                    current = self.head;
                }
                else {
                    current = current.next;
                }
            }
        };

        // Implemented without a buffer
        self.unique = function() {
            self.order();
            var current = self.head;
            while (current !== null && current.next !== null) {
                if (current.data === current.next.data) {
                    current.next = current.next.next;
                    // restart from the head
                    current = self.head;
                }
                else {
                    current = current.next;
                }
            }
        };

        return self;

    };

    // A simple linked list
    var ll = new LinkedList(1);

    strictEqual(ll.find(1).data, 1);
    strictEqual(ll.find(3), null);
    strictEqual(ll.insert(1, 2).data, 2);
    strictEqual(ll.find(2).data, 2);
    strictEqual(ll.insert(3, 4), null);
    strictEqual(ll.insert(2, 3).data, 3);
    strictEqual(ll.insert(3, 5).data, 5);
    strictEqual(ll.insert(3, 4).data, 4);
    strictEqual(ll.find(4).next.data, 5);
    strictEqual(ll.toString(), '12345');

    ll.delete(4);
    strictEqual(ll.find(4), null);
    strictEqual(ll.find(3).next.data, 5);

    ll.delete(5);
    strictEqual(ll.find(5), null);
    strictEqual(ll.find(3).next, null);

    // A linked list with only one element, which is removed and replaced with an empty node
    var ll_2 = new LinkedList(1);
    ll_2.delete(1);

    strictEqual(ll_2.find(1), null);
    strictEqual(ll_2.insert(1, 2), null);
    strictEqual(ll_2.insert(undefined, 1).data, 1);
    strictEqual(ll_2.find(null), null);

    // A linked list with an empty node as head
    var ll_3 = new LinkedList();
    ll_3.delete(undefined);

    strictEqual(ll_3.find(undefined).data, undefined);

    // A linked list with an empty node as second node
    var ll_4 = new LinkedList(1);
    ll_4.insert(1, undefined);
    ll_4.insert(undefined, 2);

    strictEqual(ll_4.find(undefined).next.data, 2);

    ll_4.delete(undefined);

    strictEqual(ll_4.find(1).next.data, 2);
    strictEqual(ll_4.toString(), '12');

    // An unordered linked list
    var ll_5 = new LinkedList(1);
    ll_5.insert(1, 2);
    ll_5.insert(2, 3);
    ll_5.insert(3, 4);
    ll_5.insert(4, 3);
    ll_5.insert(3, 2);
    ll_5.insert(2, 1);

    strictEqual(ll_5.toString(), '1213243');

    ll_5.order();

    strictEqual(ll_5.toString(), '1122334');

    ll_5.unique();

    strictEqual(ll_5.toString(), '1234');

    // An unordered linked list
    var ll_6 = new LinkedList(5);
    ll_6.insert(5, 5);
    ll_6.insert(5, 1);
    ll_6.insert(1, 4);
    ll_6.insert(4, 2);
    ll_6.insert(2, 6);
    ll_6.insert(6, 1);

    strictEqual(ll_6.toString(), '5142615');

    ll_6.order();

    strictEqual(ll_6.toString(), '1124556');

    ll_6.unique();

    strictEqual(ll_6.toString(), '12456');

});
