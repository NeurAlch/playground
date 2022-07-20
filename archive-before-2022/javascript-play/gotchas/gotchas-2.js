var module = {};
var thing = 'Global';

function say() {
    return thing;
}

(function(exports) {
    var thing = 'Not global';
    exports.say = function() {
        return thing;
    }
}(module));

strictEqual('Global', say(), 'Global');
strictEqual('Not global', module.say(), 'Not global');
