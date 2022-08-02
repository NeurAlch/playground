test('Design Patterns #1 (Functional arguments pattern)', function() {

    function args_return() {
        return Array.prototype.slice.call(arguments);
    }

    propEqual(args_return(1, 2, 3), [1, 2, 3]);

});
