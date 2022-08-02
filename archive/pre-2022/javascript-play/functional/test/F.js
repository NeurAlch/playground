(function(E, F) {

    'use strict';

    // F.identity

    E.strictEqual(5, F.identity(5));
    E.strictEqual('hello', F.identity('hello'));

    // F.add

    E.strictEqual(2, F.add(1, 1));
    E.strictEqual(7, F.add(5, 2));

    // F.curry

    var identity = F.identity;
    var identity_curried = F.curry(identity);

    E.strictEqual(1, identity_curried(1));
    E.strictEqual('hello', identity_curried('hello'));

    var add = function(x, y) { return x + y; };
    var add_curried = F.curry(add);
    var add1 = add_curried(1);

    E.strictEqual(1, add1(0));
    E.strictEqual(2, add1(1));
    E.strictEqual(9, add1(8));

    // F.map

    var numbers = [0, 1, 2];
    var numbers_plus = F.map(function(x) { return x + 1; }, numbers);

    E.strictEqual(1, numbers_plus[0]);
    E.strictEqual(2, numbers_plus[1]);
    E.strictEqual(3, numbers_plus[2]);

    // F.transformer

    var xAdd = F.transformer(F.add);
    var xAddResult = xAdd.step(0, 1);
    xAddResult = xAdd.step(xAddResult, 1);
    xAddResult = xAdd.step(xAddResult, 1);

    E.strictEqual(xAdd.result(xAddResult), 3);

    // F.reduce

    E.strictEqual(3, F.reduce(F.add, 0, [1, 1, 1]));
    E.strictEqual('hello', F.reduce(F.add, '', ['h', 'e', 'l', 'l', 'o']));

    // F.filter

    var filtered = F.filter(function(x) { return x > 1; }, [3, 2, 1]);

    E.strictEqual(filtered[0], 3);
    E.strictEqual(filtered[1], 2);
    E.strictEqual(filtered[2], undefined);

    // F.nth, F.first, F.last

    var l = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    E.strictEqual(F.head(l), 1);
    E.strictEqual(F.nth(2, l), 3);
    E.strictEqual(F.tail(l), 9);

    // F.length

    E.strictEqual(F.length([]), 0);
    E.strictEqual(F.length([1]), 1);
    E.strictEqual(F.length([1, 1]), 2);

    // F.all, F.any

    var even = function(x) { return x % 2 === 0; };

    E.strictEqual(F.all(even, [2, 4, 6]), true);
    E.strictEqual(F.all(even, [3, 4, 6]), false);
    E.strictEqual(F.any(even, [3, 5, 6]), true);
    E.strictEqual(F.any(even, [3, 5, 7]), false);

    // F.compose

    var add2 = F.add(2);
    var add4 = F.add(4);
    var add6 = F.compose(add2, add4);
    var add12 = F.compose(add6, add6);
    var add18 = F.compose(add12, add6);

    E.strictEqual(add6(0), 6);
    E.strictEqual(add12(0), 12);
    E.strictEqual(add18(0), 18);
    E.strictEqual(add18(2), 20);

}(E, F));