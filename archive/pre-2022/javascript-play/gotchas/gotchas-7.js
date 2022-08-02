
var a = function(x) { return x }
var b = a
(2)

strictEqual(b, 2, '"b" contains 2 since we called a()')

var c = ['a', 'b']
var e = c
[0]

strictEqual(e, 'a', 'We are grabbing the first element of c')

var e = 1
var f = 1
/2

strictEqual(f.toPrecision(1), '0.5', 'We divided 1 by 2')

function oops() {
    return
    'oops'
}

strictEqual(oops(), undefined, 'return does not take into account the next line so this is the same as "return;"');

var g = 'a'
'b'
'c'

strictEqual(g, 'a', 'Strings are not concatenated without plus (+) so this are actually 3 lines')

var h = [1]
[0]

strictEqual(h, 1, 'We are grabbing the first element of the list, so h is 1')

var i = {a: 'abc', b: 'bcd'}
.a
[1]

strictEqual(i, 'b', 'We are getting the property "a" and grabing the first element of the string')

var j = {a: {b: 'bcd'}, b: {c: 'cde'}}
.a
.b
[1]
== 'c'
/1

strictEqual(
    j,
    false,
    'We grab "b" from "a", get the letter "c", then "c" is divided by 1 returning NaN and compared with the "c"'
)
