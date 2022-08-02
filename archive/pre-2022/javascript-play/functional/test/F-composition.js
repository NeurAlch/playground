(function(E, F) {

    'use strict';

    var inc = function(x) { return x + 1; };
    var dec = function(x) { return x - 1; };
    var incBy2 = F.compose(inc, inc);
    var decBy2 = F.compose(dec, dec);

    E.strictEqual(4, incBy2(2));
    E.strictEqual(2, decBy2(4));

    // Associative

    E.strictEqual(4, F.compose(F.compose(inc, inc), inc)(1));
    E.strictEqual(4, F.compose(inc, F.compose(inc, inc))(1));

    E.strictEqual(2, F.identity(inc(1))); // left identity
    E.strictEqual(2, inc(F.identity(1))); // right identity
    E.strictEqual(3, F.compose(inc, inc, inc)(0)); // function composition instead of iteration
    E.strictEqual(3, inc(inc(inc(0)))); // correspondence between function iteration

}(E, F));