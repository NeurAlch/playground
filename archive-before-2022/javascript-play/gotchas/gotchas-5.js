strictEqual(+true, 1, '"true" is turned into 1');
strictEqual(1 + true, 2, '"true" is turned into 1, so 1 + true is 2');
strictEqual(1 + '1', '11', 'We are coercing 1 into a string, so we get 11');
strictEqual('1' + 1, '11', 'Same but in different order, string matters more');
strictEqual(1 + 1 + '1', '21', 'Left associative so is the same as (1 + 1) + "1"');
strictEqual(1 + '1' + 1, '111', 'Left associative so is the same as (1 + "1") + 1');
strictEqual(+null, 0, '"null" is converted into 0');
strictEqual(1 + null, 1, '"null" is converted into 0 so 0 + 1 is 1');
strictEqual('1' + null, '1null', '"null" is converted first into a string and concatenated to 1');
strictEqual(null + 1 + '1', '11', 'Left associative (null + 1) + "1"');
strictEqual('10' * 10, 100, 'In multiplication the string is turned into a number');
strictEqual('1' + NaN, '1NaN', '"NaN" is concatenated');
strictEqual(+[], 0, '[] is turned into 0');
strictEqual([] + 1, '1', '[] is an empty string and concatenated to "1"');
strictEqual(1 + Math, '1[object Math]', '"Math" is coerced into a string using toString method and concatenated');
strictEqual(1 + {toString: function() { return 1; } }, 2, 'To string is called on our object');
strictEqual(
    1 + {toString: function() { return "[object Object]"; }, valueOf: function() { return 1; } },
    2,
    'In the case there is a valueOf method that takes priority over toString'
);
strictEqual(!0, true, '0 is turned into false');
strictEqual(!-0, true, '-0 is turned into false');
strictEqual(!null, true, 'null is turned into false');
strictEqual(!undefined, true, 'undefined is turned into false');
strictEqual(!"", true, 'empty string is turned into false');
strictEqual(!NaN, true, 'NaN is turned into false');
strictEqual(!1, false, '1 is turned into true');
strictEqual(!-1, false, '-1 is turned into true');
strictEqual(!"something", false, 'non-empty string is turned into true');
