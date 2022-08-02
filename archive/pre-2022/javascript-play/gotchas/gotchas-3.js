
strictEqual(hello(), 'Hello World', 'Our function, even tho is declared after this call is hoisted (moved to top).');

// Declaration after being called
function hello() {
    return 'Hello World';
}

function notHoisted() { bye(); }
throws(notHoisted, /TypeError/, 'Since our bye function was defined with var the value of bye is hoisted and undefined.');

// bye is hoisted to top, with value undefined, but assignment of the function is done here
var bye = function() {
    return 'Bye!';
};

// i definition is actually moved to the top of the function, out of the for scope
function hoistedVar() {
    for(var i=0; i < 10; i++) {}
    i = 0;
    return i;
}

strictEqual(hoistedVar(), 0, 'Variable i is hoisted at the beginning of our function, so we can access it later.');

// Even tho there are 3 declarations of i, only one and not 3 are declared
// Is the equivalent to 'var x = 0, i;' at the first line of the function
// Notice that those declarations are turned into assignments so i will be undefined before the second line
// of the function
function repeatFoo() {
    var x = 0;
    for(var i=0; i < 10; i++) {
        x++;
    }
    for(var i=0; i < 10; i++) {
        x++;
    }
    for(var i=0; i < 10; i++) {
        x++;
    }
    return x;
}

strictEqual(repeatFoo(), 30, 'Even if we define the same variable many times it gets hoisted to the top as one.');
