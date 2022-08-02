
function objectName(obj) {
    return `function ${obj}() { [native code] }`;
}

// Built in objects
strictEqual(Object.toString(), objectName('Object'), 'There is Object!');
strictEqual(Function.toString(), objectName('Function'), 'There is the Function object.');
strictEqual(Boolean.toString(), objectName('Boolean'), 'There is the Boolean object.');
strictEqual(Symbol.toString(), objectName('Symbol'), 'There is the Symbol object.');
strictEqual(Error.toString(), objectName('Error'), 'There is the Error object.');
strictEqual(Date.toString(), objectName('Date'), 'There is the Date object.');
strictEqual(Number.toString(), objectName('Number'), 'There is the Number object.');
strictEqual(String.toString(), objectName('String'), 'There is the String object.');
strictEqual(RegExp.toString(), objectName('RegExp'), 'There is the RegExp object.');
strictEqual(Array.toString(), objectName('Array'), 'There is the Array object.');
strictEqual(Map.toString(), objectName('Map'), 'There is the Map object.');
strictEqual(Set.toString(), objectName('Set'), 'There is the Set object.');
strictEqual(ArrayBuffer.toString(), objectName('ArrayBuffer'), 'There is the ArrayBuffer object.');
strictEqual(DataView.toString(), objectName('DataView'), 'There is the DataView object.');
strictEqual(Promise.toString(), objectName('Promise'), 'There is the Promise object.');
strictEqual(JSON.toString(), '[object JSON]', 'There is the JSON object.');
strictEqual(Math.toString(), '[object Math]', 'There is the Math object.');

// ReferenceError, not defined
//strictEqual(Proxy.toString(), objectName('Proxy'), 'There is the Proxy object.');
//strictEqual(Reflect.toString(), objectName('Reflect'), 'There is the Reflect object.');

// literal notation
let objLN = {};
strictEqual(typeof objLN, 'object', 'Object created with literal notation');
strictEqual('constructor' in objLN, true, 'Has implicit references for values of its prototype chain');

// constructor
let objC = new Object();
strictEqual(typeof objC, 'object', 'Object created with constructor');
strictEqual('constructor' in objC, true, 'Has implicit references for values of its prototype chain');


let Animal = function() {};
Animal.prototype.isAnimal = function() { return true; };

let Pet = function() {};
Pet.prototype = new Animal();
Pet.prototype.isPet = function() { return true; };

let Dog = function() {
    this.type = 'dog';
};
Dog.prototype = new Pet();
Dog.prototype.isDog = function() { return true; };

let dog = new Dog();

strictEqual('isAnimal' in dog, true, 'Has implicit references for values of its prototype chain (Animal)');
strictEqual('isPet' in dog, true, 'Has implicit references for values of its prototype chain (Pet)');
strictEqual('isDog' in dog, true, 'Has implicit references for values of its prototype chain (Dog)');
strictEqual(dog.hasOwnProperty('isDog'), false, 'hasOwnProperty does not check on the prototype chain (Dog)');
strictEqual(dog.hasOwnProperty('type'), true, 'hasOwnProperty checks for properties on the object');
strictEqual(dog.type, 'dog', 'Our property is on the dog object only');

Dog.isDog = function() { return false; };
strictEqual(dog.isDog(), true, 'We did not change the actual prototype function');

Dog.prototype.isDog = function() { return false; };
strictEqual(dog.isDog(), false, 'We did change now the actual prototype function');
