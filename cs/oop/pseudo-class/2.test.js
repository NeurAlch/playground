const House = require('./2');

test('Test house has 2 rooms', () => {
    let house = new House(2);
    expect(house.countRooms()).toBe(2);
});

test('Test house has 0 rooms after destroyed', () => {
    let house = new House(3);
    house.destroy();
    expect(house.countRooms()).toBe(0);
});

test('Test small is an instance of House', () => {   
    let small = new House(1);
    expect(small).toBeInstanceOf(House);
});

test('Test House instances have different destroy functions', () => {   
    let small = new House(1);
    let big = new House(5);
    // Since each instance creates its own function,
    // the references are not equal.
    expect(small.destroy === big.destroy).toBeFalsy();
});