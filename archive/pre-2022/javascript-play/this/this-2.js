function hi() {
    return this;
}

strictEqual(hi().toString(), '[object Window]', 'Since not using strict mode "this" points to Window object.');
strictEqual(hi.call(window).toString(), '[object Window]', 'We can use "call" to define what "this" references.');
strictEqual(hi.call('javascript').toString(), 'javascript', 'In this case "this" points to our string "javascript"');

(function() {
    'use strict';
    function hi() {
        return this;
    }
    strictEqual(typeof hi(), 'undefined', 'In strict mode "this" is undefined');
    strictEqual(hi.call('javascript'), 'javascript', 'We can use again "call" to define what "this" references.');
}());
