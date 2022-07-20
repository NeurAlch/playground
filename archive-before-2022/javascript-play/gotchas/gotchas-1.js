
function first() {
    return 'Original function';
}

function first_override() {
    // without using var we are overriding the global function
    first = function() { return 'Overridden function'; };
    return first();
}

function second() {
    // we are defining a new function in this scope
    var first = function() { return 'Second function'; };
    return first();
}

strictEqual('Original function', first(), 'Original function');
strictEqual('Overridden function', first_override(), 'Overridden function');
strictEqual('Overridden function', first(), 'Original function (overridden)');
strictEqual('Second function', second(), 'Second function');
