(function(E, window) {

    'use strict';

    var __ = {F: 'placeholder'};

    /**
     * Return the parameter supplied
     * @param x
     * @returns {*}
     */
    var identity = function identity(x) {
        return x;
    };

    /**
     * Add two numbers or strings
     * @param x
     * @param y
     * @returns {*}
     */
    var add = function add(x, y) {
        return x + y;
    };

    /**
     * Create a new list by applying function fn to every element of the supplied list
     * @param fn
     * @param list
     * @returns {Array}
     */
    var map = function map(fn, list) {

        var i = -1,
            len = list.length,
            result = [];

        while (++i < len) {
            result[i] = fn(list[i]);
        }

        return result;

    };

    /**
     * Wrap a reducing function
     * @param xf
     * @returns {{init: Function, step: Function, result: Function}}
     */
    var transformer = function transformer(xf) {
        return {
            init: function() {
                throw new Error('init not implemented');
            },
            step: function(acc, x) {
                return xf(acc, x);
            },
            result: function(acc) {
                return acc;
            }
        }
    };

    /**
     * Internal optimized curry function
     * @private
     * @param {Function} fn
     * @returns {Function}
     */
    var _curry1 = function _curry1(fn) {
        return function fn1(a) {
            if (arguments.length === 0) { return fn1; }
            else if (a === __) { return fn1; }
            else { return fn(a); }
        };
    };

    /**
     * Internal optimized two-arity curry function
     * @private
     * @param {Function} fn
     * @returns {Function}
     */
    var _curry2 = function _curry2(fn) {
        return function fn2(a, b) {
            var n = arguments.length;
            if (n === 0) { return fn2; }
            else if (n === 1 && a === __) { return fn2; }
            else if (n === 1) { return _curry1(function(b) { return fn(a, b); }) }
            else if (n === 2 && a === __ && b === __) { return fn2; }
            else if (n === 2 && a === __) { return _curry1(function(a) { return fn(a, b); }) }
            else if (n === 2 && b === __) { return _curry1(function(b) { return fn(a, b); }) }
            else { return fn(a, b); }
        }
    };

    /**
     * Internal optimized three-arity curry function
     * @private
     * @param {Function} fn
     * @returns {Function}
     */
    var _curry3 = function _curry3(fn) {
        return function fn3(a, b, c) {
            var n = arguments.length;
            if (n === 0) { return fn3; }
            else if (n === 1 && a === __) { return fn3; }
            else if (n === 1) { return _curry2(function(b, c) { return fn(a, b, c); }) }
            else if (n === 2 && a === __ && b === __) { return fn3; }
            else if (n === 2 && a === __) { return _curry2(function(a, c) { return fn(a, b, c); }) }
            else if (n === 2 && b === __) { return _curry2(function(b, c) { return fn(a, b, c); }) }
            else if (n === 2) { return _curry1(function(c) { return fn(a, b, c); }); }
            else if (n === 3 && a === __ && b === __ && c === __) { return fn3; }
            else if (n === 3 && a === __ && b === __) { return _curry2(function(a, b) { return fn(a, b, c); })}
            else if (n === 3 && a === __ && c === __) { return _curry2(function(a, c) { return fn(a, b, c); })}
            else if (n === 3 && b === __ && c === __) { return _curry2(function(b, c) { return fn(a, b, c); })}
            else if (n === 3 && a === __) { return _curry1(function(a) { return fn(a, b, c); })}
            else if (n === 3 && b === __) { return _curry1(function(b) { return fn(a, b, c); })}
            else if (n === 3 && c === __) { return _curry1(function(c) { return fn(a, b, c); })}
            else { return fn(a, b, c); }
        }
    };

    /**
     * Transform fn into a curried function
     * @param {Function} fn
     * @returns {Function}
     */
    var curry = function curry(fn) {
        var length = fn.length;
        if (length < 1) {
            return fn;
        }
        if (length > 3) {
            throw new Error('Do you really need more than 3 arguments!?');
        }
        else if (length === 1) { return _curry1(fn); }
        else if (length === 2) { return _curry2(fn); }
        else if (length === 3) { return _curry3(fn); }
        return fn;
    };

    /**
     * Reduce an array by calling the iterator function with the accumulator and current value
     * @param {Function} xf
     * @param acc
     * @param list
     * @returns {*}
     */
    var reduce = function reduce(xf, acc, list) {

        if (typeof xf === 'function') {
            xf = transformer(xf);
        }

        var i = -1,
            len = list.length;

        while (++i < len) {
            acc = xf.step(acc, list[i]);
        }

        return xf.result(acc);

    };

    /**
     * Return a new list containing only the items that match the predicate function
     * @param {Function} fn
     * @param list
     * @returns {Array}
     */
    var filter = function filter(fn, list) {

        var i = -1,
            len = list.length,
            result = [];

        while (++i < len) {
            if (fn(list[i])) {
                result[result.length] = list[i];
            }
        }

        return result;

    };

    /**
     * Return the nth element on the list
     * @param n
     * @param list
     * @return {*}
     */
    var nth = function nth(n, list) {
        return n < 0 ? list[list.length + n] : list[n];
    };

    /**
     * Return the first element in a list
     * @param list
     * @return {*}
     */
    var head = _curry2(nth)(0);

    /**
     * Return the last element in a list
     * @param list
     * @return {*}
     */
    var tail = _curry2(nth)(-1);

    /**
     * Return a new function that runs each of the supplied function parameters with result of each function
     * starting with the argument that was passed to the first invocation.
     * @return {Function}
     */
    var compose = function compose() {

        var args = arguments;
        var start = arguments.length - 1;

        return function() {

            var i = start;
            var result = args[start].apply(this, arguments);

            while (i--) {
                result = args[i].call(this, result);
            }

            return result;

        }

    };

    /**
     * Return the number of elements in the list
     * @param list
     * @returns {number}
     */
    var length = function length(list) {
        return list.length;
    };

    /**
     * Return true if at least one of the elements of the list is true for the predicate
     * @param fn
     * @param list
     * @returns {boolean}
     */
    var any = function any(fn, list) {

        var i = -1;

        while (++i < list.length) {
            if (fn(list[i])) {
                return true;
            }
        }

        return false;

    };

    /**
     * Return true if all of the elements of the list are true for the predicate
     * @param fn
     * @param list
     * @returns {boolean}
     */
    var all = function all(fn, list) {

        var i = -1;

        while (++i < list.length) {
            if (!fn(list[i])) {
                return false;
            }
        }

        return true;

    };

    /**
     * Multiply two numbers
     * @param x
     * @param y
     * @returns {number}
     */
    var multiply = function multiply(x, y) {
        return x * y;
    };

    /**
     * Divide two numbers
     * @param x
     * @param y
     * @returns {number}
     */
    var divide = function divide(x, y) {
        return x / y;
    };

    window.F = {
        add: _curry2(add),
        all: _curry2(all),
        any: _curry2(any),
        compose: compose,
        curry: curry,
        divide: _curry2(divide),
        filter: _curry2(filter),
        head: head,
        identity: identity,
        length: length,
        map: _curry2(map),
        multiply: _curry2(multiply),
        nth: _curry2(nth),
        reduce: _curry3(reduce),
        tail: tail,
        transformer: transformer
    };

}(E, window));