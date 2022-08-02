(function(E, F) {

    'use strict';

    var add = function(x, y) { return x + y; }
    var one = add(0, 1);
    var two = add(1, 1);

    E.strictEqual(2, add(add(0, 1), add(0, 1)));
    E.strictEqual(2, add(one, one));
    E.strictEqual(2, two);

    // Impure function, state out of scope

    var n = 1;
    var impure = function(x) {
        return n + x;
    };

    E.strictEqual(2, impure(1));
    n = 0; // change in state out of scope
    E.strictEqual(1, impure(1));

    // Impure function, different result every time

    var z = 0;
    var different = function(x) {
        z++;
        return x + z;
    };

    E.strictEqual(2, different(1));
    E.strictEqual(3, different(1));

    // Tables instead of functions

    var even_table = {1: false, 2: true, 3: false, 4: true, 5: false, 6: true};
    var even = function(x) { return x % 2 === 0; };

    E.strictEqual(false, even(1));
    E.strictEqual(true, even(2));

    E.strictEqual(even_table[1], even(1));
    E.strictEqual(even_table[2], even(2));
    E.strictEqual(even_table[3], even(3));
    E.strictEqual(even_table[4], even(4));
    E.strictEqual(even_table[5], even(5));
    E.strictEqual(even_table[6], even(6));

}(E, F));