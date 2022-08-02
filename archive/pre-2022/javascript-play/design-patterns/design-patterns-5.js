test('Design Patterns #5 (Observable properties)', function() {

    var Monster = function() {
        this.health = 100;
        this.onDeadhCallbacks = [];
    };

    Monster.prototype.getHealth = function() {
        return this.health;
    };

    Monster.prototype.damage = function(health) {
        if (health !== undefined) {
            this.health -= health;
            if (this.health <= 0) {
                for (var i = 0; i < this.onDeadhCallbacks.length; i++) {
                    this.onDeadhCallbacks[i]();
                }
            }
        }
    };

    Monster.prototype.onDead = function(callback) {
        this.onDeadhCallbacks.push(callback);
    };

    var monster = new Monster();
    monster.onDead(function() {
        throw 'The monster died!';
    });

    strictEqual(monster.getHealth(), 100);

    monster.damage(5);

    strictEqual(monster.getHealth(), 95);

    function damage() { monster.damage(100); }
    throws(damage, /died/, 'The monster should be dead!');

});
