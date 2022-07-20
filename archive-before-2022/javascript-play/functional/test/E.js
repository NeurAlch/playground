(function(E) {

    'use strict';

    try {
        E.strictEqual(1, 0);
    } catch (e) {
        E.strictEqual(typeof e, 'object');
    }

    E.strictEqual(true, E.strictEqual(1, 1));

}(E));