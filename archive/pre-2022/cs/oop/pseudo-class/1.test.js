const Animal = require('./1');

test('Animal is a dog', () => {   
    let dog = new Animal('dog');
    expect(dog.getSpecies()).toBe('dog');
});

test('Animal is a cat', () => {   
    let cat = new Animal('cat');
    expect(cat.getSpecies()).toBe('cat');
});

test('cat is an instance of Animal', () => {   
    let cat = new Animal('cat');
    expect(cat).toBeInstanceOf(Animal);
});

test('Animal instances have the same getSpecies function', () => {   
    let cat = new Animal('cat');
    let dog = new Animal('dog');
    expect(cat.getSpecies === dog.getSpecies).toBeTruthy();
});