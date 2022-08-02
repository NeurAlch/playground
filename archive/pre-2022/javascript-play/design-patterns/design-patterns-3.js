test('Design Patterns #3 (Inheritance with Object.create)', function() {

    var Point = function(options) {
        this._options = options || {};
        this.x = this._options.x || 0;
        this.y = this._options.y || 0;
    };

    Point.prototype.move = function(x, y) {
        this.x = x;
        this.y = y;
    };

    Point.prototype.position = function() {
        return [this.x, this.y];
    };

    var Point3D = function(options) {
        Point.call(this, options);
        this.z = this._options.z || 0;
    };

    Point3D.prototype = Object.create(Point.prototype);
    Point3D.prototype.constructor = Point3D;

    Point3D.prototype.move = function(x, y, z) {
        Point.prototype.move.call(this, x, y);
        this.z = z;
    };

    Point3D.prototype.position = function() {
        return [this.x, this.y, this.z];
    };

    var rect = new Point3D();
    var pos = rect.position();

    strictEqual(pos[0], 0);
    strictEqual(pos[1], 0);
    strictEqual(pos[2], 0);

    rect.move(1, 2, 1);

    pos = rect.position();

    strictEqual(pos[0], 1);
    strictEqual(pos[1], 2);
    strictEqual(pos[2], 1);

});
