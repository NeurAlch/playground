var pet = {
    talk: function() { return this; }
};

function talk() {
    return pet.talk();
}
strictEqual(talk().toString(), '[object Object]', '"this" from our method points to the object.');

// Our binding function
function bind(func, thisValue) {
    return function() {
        // We use apply instead of call so we can pass arguments
        return func.apply(thisValue, arguments);
    }
}

var boundTalk = bind(pet.talk, pet); // "this" will refer to the pet object every time we use the function
strictEqual(boundTalk().toString(), '[object Object]', 'Our function has "this" has been bind to the object.');

var boundTalk2 = pet.talk.bind(pet);
strictEqual(boundTalk2().toString(), '[object Object]', 'We can also use the bind function from JS.');
