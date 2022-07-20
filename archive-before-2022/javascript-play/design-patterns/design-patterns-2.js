test('Design Patterns #1 (Chaining)', function() {

    var Calculator = function() {

        var self = this;

        self.value = 0;

        self.add = function(number) {
            self.value += number;
            return self;
        };

        self.total = function() {
            return self.value;
        }

    };

    var cal = new Calculator();

    ok(cal.add(1).toString() ===  '[object Object]', "It's a Calculator object");
    strictEqual(cal.add(1).total(), 2);
    strictEqual(cal.add(5).total(), 7);

});
