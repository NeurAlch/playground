var that = this;

strictEqual(that, window, '"that" points to the Window object.');
strictEqual(that.toString(), '[object Window]', '"that" is really the Window object.');

strictEqual(typeof this, 'object', 'This is an object.');
strictEqual(typeof that, 'object', 'That is a reference to the object.');

function insideFunction() {
    return this;
}
strictEqual(typeof insideFunction(), 'object', 'Inside a function "this" is an object.');
strictEqual(insideFunction().toString(), '[object Window]', 'IN a function "this" references the Window object.');

function nestedFunction() {
    return function() {
        return this;
    }
}
strictEqual(typeof nestedFunction()(), 'object', 'Inside a nested function "this" is still an object.');
strictEqual(nestedFunction()().toString(), '[object Window]', 'In a nested function "this" still points to Window.');

var obj = {
    method: function() {
        return this;
    }
};
strictEqual(typeof obj.method(), 'object', 'Inside a method (function in an object) "this" is an object');
strictNotEqual(obj.method().toString(), '[object Window]', 'Inside a method "this" does not point to Window.');

(function() {
    strictEqual(this.toString(), '[object Window]', '"this" is still the window object.');
}());

(function() {
    (function() {
        strictEqual(this.toString(), '[object Window]', '...still the window object in nested scope.');
    })();
}());

(function() {
    'use strict';
    strictEqual(typeof this, 'undefined', 'If we use strict mode, "this" is undefined.');
}());

(function() {
    'use strict';
    (function() {
        strictEqual(typeof this, 'undefined', '"this" still undefined in nested scope thanks to strict mode.');
    }());
})();

(function() {
    'use strict';
    strictEqual(that, window, 'Our "that" variable still points to the window.');
}());