(function($, window, undefined) {

    'use strict';

    var assertTrue = function(condition, message) {
        if (condition === false) {
            message = message || 'Assert failed';
            throw new Error(message);
        }
        return true;
    };

    var strictEqual = function(a, b) {
        return assertTrue(a === b, 'Expected ' + a + ' got ' + b);
    };

    window.E = {
        assertTrue: assertTrue,
        strictEqual: strictEqual
    };

}(jQuery, window));