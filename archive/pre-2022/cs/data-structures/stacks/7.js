// Hide storage and avoid leaks using WeakMap

const LIFO = (function() {

    // Ensure this is private
    const storage = new WeakMap();

    class LIFO {
        constructor() {
            storage.set(this, []);
        }
        pop() {
            let s = storage.get(this);
            return s.pop();
        }
        push(value) {
            let s = storage.get(this);
            s.push(value);
        }
        isEmpty() {
            let s = storage.get(this);
            return s.length === 0;
        }
        peek() {
            let s = storage.get(this);
            return s[s.length - 1];
        }
    }

    return LIFO;

})();

module.exports = LIFO;