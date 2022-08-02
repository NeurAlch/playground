function say() {
    return this;
}

var pet = {};

with (pet) {
    strictEqual(say().toString(), '[object Window]', '"this" points to the Window object.');
}

pet.say = say;

with (pet) {
    strictEqual('[object Object]', say().toString(), 'Now say points to the pet object.');
}
