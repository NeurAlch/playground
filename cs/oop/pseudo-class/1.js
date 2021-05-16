// This is just a simple function,
// in JavaScript functions are first-class objects.
function Animal(species) {
    // Notice the use of this.
    this.species = species;
}
  
// If we define our functions using the prototype object, 
// all our instances will use this same function.
Animal.prototype.getSpecies = function() {
    return this.species;
}

module.exports = Animal;