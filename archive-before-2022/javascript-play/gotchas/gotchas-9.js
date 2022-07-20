(function (window, document, undefined) {
    // the undefined parameter avoids the problem of someone changing the undefined value in non strict mode
    strictEqual(undefined, undefined, 'Since we did not pass a third value, undefined actually is undefined');
})(window, document);

(function() {
    'use strict';
    // in strict mode undefined is read-only so we can't do this and change what undefined means
    // window.undefined = true;
}());

function bugged() {
    var l = [];
    for(var i=0; i < 10; i++) {
        // i will be a reference to the variable i, and not its current value, so it will have the last value
        l[i] = function() {
            return i;
        }
    }
    return l;
}

var r = bugged();
strictEqual(r[0](), 10, 'No matter how many times the loop runs, "i" always references the last value');
strictEqual(r[3](), 10, 'Same here');
strictEqual(r[9](), 10, 'Same here');

function notBugged() {
    var l = [];
    for(var i=0; i < 10; i++) {
        (function() {
            // j will capture the current value of i in this IIFE
            var j = i;
            l[i] = function() {
                return j;
            }
        }());
    }
    return l;
}

var r2 = notBugged();
strictEqual(r2[0](), 0, 'Now we captured the value in "j" so we actually have the correct value in that loop cycle');
strictEqual(r2[3](), 3, 'Same here');
strictEqual(r2[9](), 9, 'Same here');

function notBugged2() {
    var l = [];
    for(var i=0; i < 10; i++) {
        // j is the current value of i in this IIFE
        (function(j) {
            l[j] = function() {
                return j;
            }
        }(i));
    }
    return l;
}

var r3 = notBugged2();
strictEqual(r3[0](), 0, 'We can use a IIFE to pass the value we need inside the function');
strictEqual(r3[3](), 3, 'Same here');
strictEqual(r3[9](), 9, 'Same here');