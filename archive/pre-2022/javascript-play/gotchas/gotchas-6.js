strictEqual(NaN == NaN, false, 'NaN is not equal to itself');

strictEqual(true == false, false, 'true is not equal to false');
strictEqual(true == true, true, 'true is equal to true');
strictEqual(false == false, true, 'false is equal to false');
strictEqual(false == 0, true, 'false and 0 are equal');
strictEqual(false == undefined, false, 'false is not equal to undefined' );
strictEqual(false == -1, false, 'false is not equal to -1');
strictEqual(false == '', true, 'false is equal to empty string');
strictEqual(false == [], true, 'false is equal to empty list');
strictEqual(false == {}, false, 'false is not equal to object');
strictEqual(false == function() {}, false, 'false is not equal to function');

strictEqual(null == undefined, true, 'null and undefined are compared as boolean false');
strictEqual(null == 0, false, 'null and 0 are not equal');
strictEqual(null == -1, false, 'null and -1 are not equal');
strictEqual(null == '', false, 'null and empty string are not equal');
strictEqual(null == [], false, 'null and empty list are not equal');
strictEqual(null == {}, false, 'null and object are not equal');
strictEqual(null == function() {}, false, 'null and function are not equal');

var now = new Date();
strictEqual(now == 0, false, 'Date is not equal to 0');
strictEqual(now == -1, false, 'Date is not equal to -1');
strictEqual(now == '', false, 'Date is not equal to empty string');
strictEqual(now == [], false, 'Date is not equal to empty list');
strictEqual(now == {}, false, 'Date is not equal to object');
strictEqual(now == function() {}, false, 'Date is not equal to function');
strictEqual(now == now, true, 'Date is equal to itself');

strictEqual('1' == 1, true, 'String is coerced so is equal');
strictEqual('-0' == -0, true, 'string "-0" is not equal to -0');
strictEqual('' == 0, true, 'empty string and 0 are turned into false');
strictEqual('a1' == 1, false, 'string is not coerced to number since it has letters');
strictEqual('' == '', true, 'empty strings are coerced to false');
strictEqual('a' == '', false, 'empty string is not equal to non-empty string');
strictEqual(1 == 1, true, '1 is the same as 1');
strictEqual(1 == 2, false, '1 is not the same as 2, treated as numbers');
strictEqual({} == [], false, 'object is not the same as empty string');
strictEqual([1] == '1', true, '[1] and "1" are the same, coerced');

var a = {};
b = a;
strictEqual(a == b, true, 'objects are the same instance');
strictEqual({} == {}, false, 'objects are not the same instance');


var c = [];
d = c;
strictEqual(c == d, true, 'variables point to the same list');
strictEqual([] == [], false, 'empty lists are not the same');

