var pet = {
    talk: function() {
        return this;
    },
    walk: function() {
        return function() {
            return this;
        }();
    }
};

strictEqual('[object Object]', pet.talk().toString(), '"this" inside an object method points to the object itself.');
strictEqual('[object Object]', pet.talk.call(pet).toString(), 'We could "call" the method passing the object.');
strictEqual('[object Window]', pet.walk().toString(), 'But "this" in a function in a method points to the Window.');

// another talk function outside of object
function talk() {
    return this;
}
strictEqual('[object Window]', talk().toString(), 'In our function outside the object, "this" points to Window.');

// Lets change our function
pet.talk = talk;
strictEqual('[object Object]', pet.talk().toString(), 'Our "this" now points to the object instead of the function.');