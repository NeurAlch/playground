;(function() {

    'use strict';

    test('FP - K Combinator', function() {

        /**
         * Simple combinator which manufactures constant functions. For any argument return x.
         * K :: a -> (_ -> a)
         * @param x
         * @returns {Function}
         * @constructor
         */
        var K = function(x) { return function(y) { return x; } };

        var alwaysOne = K(1);
        strictEqual(alwaysOne(1), 1);
        strictEqual(alwaysOne(2), 1);
        strictEqual(alwaysOne(), 1);

        var alwaysTwo = K(2);
        strictEqual(alwaysTwo(1), 2);
        strictEqual(alwaysTwo(2), 2);
        strictEqual(alwaysTwo(), 2);

    });


}());