test('Determine if a string is a permutation of another.', function() {

    var A_1 = 'ABCA';
    var A_2 = 'CBAA';
    var A_3 = 'DDAA';
    var A_4 = 'ACBA';
    var A_5 = 'AAC';
    var A_6 = 'BCAA';

    var B_1 = 'apple';
    var B_2 = 'papel';
    var B_3 = 'aeppl';
    var B_4 = null;
    var B_5 = -1;
    var B_6 = -1;

    function permutation(a, b) {
        a = a || '';
        b = b || '';
        if (!a.toLowerCase || !b.toLowerCase) return false;
        if (a.length !== b.length) return false;
        a = a.toLowerCase();
        b = b.toLowerCase();
        a = a.split('').sort();
        b = b.split('').sort();
        return a.join('') === b.join('');
    }

    strictEqual(permutation(A_1, A_2), true);
    strictEqual(permutation(A_1, A_3), false);
    strictEqual(permutation(A_1, A_4), true);
    strictEqual(permutation(A_1, A_5), false);
    strictEqual(permutation(A_1, A_6), true);

    strictEqual(permutation(B_1, B_2), true);
    strictEqual(permutation(B_1, B_3), true);
    strictEqual(permutation(B_1, B_4), false);
    strictEqual(permutation(B_1, B_5), false);
    strictEqual(permutation(B_1, B_6), false);

});
