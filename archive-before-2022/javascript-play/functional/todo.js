;(function() {

    'use strict';

    test('ToDo (playing with To Do lists)', function() {

        function todo() {
            var args = R.reverse(arguments);
            return function(l) {
                return R.apply(R.compose, args)(l);
            }
        }

        /**
         * Returns a function that appends a value to a list
         * @param v
         * @returns {Function}
         */
        function add(v) {
            return function(l) {
                return R.append(v, l);
            }
        }

        /**
         * Returns a function that pops the first matching value on a list
         * @param v
         * @returns {Function}
         */
        function pop(v) {
            return function(l) {
                return R.remove(R.findIndex(function(x) { return x === v; }, l), 1, l);
            }
        }

        /**
         * Returns a function that removes (rejects) all values matching on a list
         * @param v
         * @returns {Function}
         */
        function remove(v) {
            return function(l) {
                return R.reject(function(x) { return x === v; }, l);
            }
        }

        var todo_list = [];
        strictEqual(todo_list.length, 0);

        todo_list = todo(
            add('Buy book'),
            add('Read book'),
            add('Keep book')
        )(todo_list);
        strictEqual(todo_list.length, 3);

        todo_list = todo(
            pop('Keep book')
        )(todo_list);
        strictEqual(todo_list.length, 2);

        todo_list = todo(
            add('Keep book'),
            add('Read book again'),
            add('Keep book'),
            add('Keep book'),
            pop('Keep book')
        )(todo_list);
        strictEqual(todo_list.length, 5);

        todo_list = todo(
            remove('Keep book')
        )(todo_list);
        strictEqual(todo_list.length, 3);

        todo_list = todo(
            R.uniq
        )(todo_list);
        strictEqual(todo_list.length, 3);

        todo_list = todo(
            R.empty
        )(todo_list);
        strictEqual(todo_list.length, 0);

    });

}());
