(function(E, F) {

    var add = function(x, y) { return x + y; }
    var multiply = function(x, y) { return x * y; }
    var a = 1;
    var b = 2;
    var c = 3;

    // Associative
    E.strictEqual(add(add(a, b), c), add(a, add(b, c)));

    // Commutative
    E.strictEqual(add(a, b), add(b, a));

    // Identity
    E.strictEqual(add(a, 0), a);

    // Distributive
    E.strictEqual(multiply(a, add(b, c)), add(multiply(a, b), multiply(a, c)));

}(E, F));