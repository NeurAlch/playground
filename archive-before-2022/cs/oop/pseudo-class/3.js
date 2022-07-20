var getColor = function() {
    return this.color;
}

const Paint = function(color) {
    this.color = color;
    // We point our function to one defined outside,
    // all instances will use the same function.
    this.getColor = getColor;
}

module.exports = Paint;