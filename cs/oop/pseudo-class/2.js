const House = function(rooms) {

    this.rooms = rooms;

    // Since we are defining our functions inside the house
    // we will have different functions for each instance,
    // this would be an issue if we create 10,000,000 House 
    // instances.

    this.destroy = function() {
        this.rooms = 0;
    }

    this.countRooms = function() {
        return this.rooms;
    }

}

module.exports = House;