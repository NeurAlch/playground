(function() {

    var i = 0;
    var numbers = [];

    function iteratorHandler() {
        i = 10;
    }

    function iterate() {
        // Not using var on for statement
        for (i = 0; i < 10; i++) {
            numbers.push(i);
            // This will set i to 10 making the loop run just once
            iteratorHandler();
            // Now i contains 10
            numbers.push(i);
        }
    }

    iterate();

    strictEqual(numbers[0], 0, 'Our first value for i is 0.');
    strictEqual(numbers[1], 10, 'But because of the call to "iteratorHandler" it changes to 10 and the loop ends.');

}());

(function() {

    var i = 0;
    var numbers = [];

    function iteratorHandler() {
        i = 10;
    }

    function iterate() {
        // Using var on for statement, to avoid the use of the upper scope i
        for (var i = 0; i < 10; i++) {
            iteratorHandler();
            numbers.push(i);
        }
    }

    iterate();

    strictEqual(numbers[0], 0, 'Our value is 0');
    strictEqual(numbers[1], 1, 'Our value is 1');
    strictEqual(numbers[2], 2, 'Our value is 2');
    strictEqual(numbers[3], 3, 'Our value is 3');
    strictEqual(numbers[4], 4, 'Our value is 4');
    strictEqual(numbers[5], 5, 'Our value is 5');
    strictEqual(numbers[6], 6, 'Our value is 6');
    strictEqual(numbers[7], 7, 'Our value is 7');
    strictEqual(numbers[8], 8, 'Our value is 8');
    strictEqual(numbers[9], 9, 'Our value is 9');

}());
