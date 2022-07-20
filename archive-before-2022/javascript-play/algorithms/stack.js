test("Implement a Stack", function() {

    'use strict';

    var Stack = function(data) {

        var self = this;
        var top = new Node(data);

        self.push = function(d) {
            var n = new Node(d);
            n.next = top;
            top = n;
        };

        self.pop = function() {
            if (top !== null) {
                var v = top.data;
                top = top.next;
                return v;
            }
            return null;
        };

        self.peak = function() {
            if (top === null) return null;
            return top.data;
        };

        self.min = function() {
            var current = top;
            var min = current.data;
            while (current !== null && current.next !== null) {
                if (min > current.data) {
                    min = current.data;
                }
                current = current.next;
            }
            return min;
        };

        self.max = function() {
            var current = top;
            var max = current.data;
            while (current !== null && current.next !== null) {
                if (max < current.data) {
                    max = current.data;
                }
                current = current.next;
            }
            return max;
        };

    };

    var Node = function(data) {
        var self = this;
        self.data = data;
        self.next = null;
    };

    var StackOfStacks = function(data, size) {

        var self = this;
        var stacks = [new Stack(data)];
        var current_count = 1;

        var position = function() {
            return current_count/size | 0;
        };

        self.push = function(d) {

            var p = position();

            if (p > stacks.length - 1) {
                stacks[p] = new Stack(d);
            }
            else {
                stacks[p].push(d);
            }

            current_count++;

        };

        self.pop = function() {

            var p = stacks.length - 1;

            if (stacks[p].peak() === null) {
                if (stacks.length === 1) {
                    return null;
                }
                stacks.splice(p, 1);
                current_count--;
                return stacks[p - 1].pop();
            }

            var v = stacks[p].pop();

            if (stacks[p].peak() === null) {
                if (stacks.length === 1) {
                    return v;
                }
                stacks.splice(p, 1);
            }

            current_count--;

            return v;

        };

        self.peak = function() {
            return stacks[stacks.length - 1].peak();
        };

        self.size = function() {
            return stacks.length;
        };

    };

    // Simple stack
    var s_1 = new Stack(1);

    s_1.push(2);
    s_1.push(3);

    strictEqual(s_1.peak(), 3);
    strictEqual(s_1.pop(), 3);
    strictEqual(s_1.peak(), 2);
    strictEqual(s_1.pop(), 2);
    strictEqual(s_1.peak(), 1);
    strictEqual(s_1.pop(), 1);
    strictEqual(s_1.peak(), null);
    strictEqual(s_1.pop(), null);
    strictEqual(s_1.pop(), null);

    s_1.push(5);
    s_1.push(3);
    s_1.push(2);
    s_1.push(4);
    s_1.push(7);
    s_1.push(1);
    s_1.push(6);

    strictEqual(s_1.min(), 1);
    strictEqual(s_1.max(), 7);

    // Stack of stacks
    var ss_1 = new StackOfStacks(1, 2);

    ss_1.push(2);
    ss_1.push(3);
    ss_1.push(4);
    ss_1.push(5);
    ss_1.push(6);

    strictEqual(ss_1.size(), 3);

    strictEqual(ss_1.peak(), 6);
    strictEqual(ss_1.pop(), 6);

    ss_1.push(6);
    ss_1.push(7);

    strictEqual(ss_1.size(), 4);

    strictEqual(ss_1.peak(), 7);
    strictEqual(ss_1.pop(), 7);

    strictEqual(ss_1.pop(), 6);
    strictEqual(ss_1.pop(), 5);
    strictEqual(ss_1.pop(), 4);
    strictEqual(ss_1.pop(), 3);
    strictEqual(ss_1.pop(), 2);
    strictEqual(ss_1.pop(), 1);
    strictEqual(ss_1.pop(), null);
    strictEqual(ss_1.pop(), null);

    strictEqual(ss_1.size(), 1);

    ss_1.push(1);
    ss_1.push(2);
    ss_1.push(3);

    strictEqual(ss_1.peak(), 3);
    strictEqual(ss_1.pop(), 3);

    ss_1.push(3);
    ss_1.push(4);
    ss_1.push(5);
    ss_1.push(6);
    ss_1.push(7);
    ss_1.push(8);

    strictEqual(ss_1.size(), 5);

    ss_1.pop();

    strictEqual(ss_1.peak(), 7);
    strictEqual(ss_1.pop(), 7);

    strictEqual(ss_1.peak(), 6);
    strictEqual(ss_1.pop(), 6);

    strictEqual(ss_1.peak(), 5);
    strictEqual(ss_1.pop(), 5);

    strictEqual(ss_1.peak(), 4);
    strictEqual(ss_1.pop(), 4);

    strictEqual(ss_1.peak(), 3);
    strictEqual(ss_1.pop(), 3);

    strictEqual(ss_1.peak(), 2);
    strictEqual(ss_1.pop(), 2);

    ss_1.push(2);
    ss_1.push(2);

    strictEqual(ss_1.pop(), 2);
    strictEqual(ss_1.pop(), 2);
    strictEqual(ss_1.pop(), 1);
    strictEqual(ss_1.peak(), null);

});