var a = null;
var b = a || 1;
strictEqual(b, 1, '"b" is one since "a" is null so our default works');

function setAge(n) {
    return n || 1;
}
setAge(0);
strictEqual(setAge(0), 1, 'Since 0 evaluates to false, we can not set age to zero');