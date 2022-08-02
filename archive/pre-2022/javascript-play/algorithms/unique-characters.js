test('Determine if a string has all unique characters.', function() {

    var string_1 = 'asdjoqidjalskj';
    var string_2 = 'abcidoeluksjxp';
    var string_3 = 'aeioU';
    var string_4 = 'abcdefghijklmnopqrstuvwxyz';
    var string_5 = 'abcdefghijklmnopqrstuvwxyzA';
    var string_6 = '\x41BCdefgH0123456789 ';
    var string_7 = '_ _ ';
    var string_8 = '';
    var string_9 = null;
    var string_10 = 'ABC\nDEF\n';
    var string_11 = '-1-2';
    var string_12 = -1;
    var string_13 = 0;
    var string_14 = 123;
    var string_15 = 121;

    /**
     * Check if the string is unique using indexOf to see if it repeats
     * @param str
     * @returns {boolean}
     */
    function unique_indexOf(str) {
        str = str || '';
        if (str && str.toLowerCase) {
            str = str.toLowerCase();
        }
        else {
            str = str + '';
        }
        for (var i = 0; i < str.length; i++) {
            if (str.indexOf(str.charAt(i), i + 1) !== -1) {
                return false;
            }
        }
        return true;
    }

    strictEqual(unique_indexOf(string_1), false, string_1);
    strictEqual(unique_indexOf(string_2), true, string_2);
    strictEqual(unique_indexOf(string_3), true, string_3);
    strictEqual(unique_indexOf(string_4), true, string_4);
    strictEqual(unique_indexOf(string_5), false, string_5);
    strictEqual(unique_indexOf(string_6), true, string_6);
    strictEqual(unique_indexOf(string_7), false, string_7);
    strictEqual(unique_indexOf(string_8), true, string_8);
    strictEqual(unique_indexOf(string_9), true, string_9);
    strictEqual(unique_indexOf(string_10), false, string_10);
    strictEqual(unique_indexOf(string_11), false, string_11);
    strictEqual(unique_indexOf(string_12), true, string_12);
    strictEqual(unique_indexOf(string_13), true, string_13);
    strictEqual(unique_indexOf(string_14), true, string_14);
    strictEqual(unique_indexOf(string_15), false, string_15);

    /**
     * Check if the string is unique by keeping track of chars used in another array
     * @param str
     * @returns {boolean}
     */
    function unique_key_exists(str) {
        str = str || '';
        if (str && str.toLowerCase) {
            str = str.toLowerCase();
        }
        else {
            str = str + '';
        }
        var unique = {};
        for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (unique[c] != null) {
                return false;
            }
            unique[c] = c;
        }
        return true;
    }

    strictEqual(unique_key_exists(string_1), false, string_1);
    strictEqual(unique_key_exists(string_2), true, string_2);
    strictEqual(unique_key_exists(string_3), true, string_3);
    strictEqual(unique_key_exists(string_4), true, string_4);
    strictEqual(unique_key_exists(string_5), false, string_5);
    strictEqual(unique_key_exists(string_6), true, string_6);
    strictEqual(unique_key_exists(string_7), false, string_7);
    strictEqual(unique_key_exists(string_8), true, string_8);
    strictEqual(unique_key_exists(string_9), true, string_9);
    strictEqual(unique_key_exists(string_10), false, string_10);
    strictEqual(unique_key_exists(string_11), false, string_11);
    strictEqual(unique_key_exists(string_12), true, string_12);
    strictEqual(unique_key_exists(string_13), true, string_13);
    strictEqual(unique_key_exists(string_14), true, string_14);
    strictEqual(unique_key_exists(string_15), false, string_15);


});
