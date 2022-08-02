;(function() {

    'use strict';

    var B = {}; // Brain
    var db = new ForerunnerDB();
    var col = db.collection('brain-2');

    var connections = [
        {
            name: ['apple'],
            color: ['red', 'yellow', 'green'],
            flavor: ['sweet', 'sour'],
            in: ['fruit'],
            size: ['small', 'medium']
        },
        {
            name: ['orange'],
            color: ['orange'],
            flavor: ['sweet', 'sour'],
            in: ['fruit'],
            size: ['small', 'medium']
        },
        {
            name: ['potato'],
            color: ['yellow'],
            in: ['vegetable'],
            size: ['small', 'medium']
        },
        {
            name: ['bee'],
            color: ['black', 'yellow'],
            in: ['insect'],
            size: ['small']
        },
        {
            name: ['fly'],
            color: ['black'],
            in: ['insect'],
            size: ['small']
        },
        {
            name: ['lion'],
            color: ['orange'],
            in: ['mammal'],
            size: ['big']
        },
        {
            name: ['insect'],
            in: ['animal'],
            size: ['small', 'medium'],
            speed: ['slow', 'normal', 'fast']
        }
    ];

    col.setData(connections);

    function query(attribute, values) {
        return R.map(function(v) {
            var q = {};
            q[attribute] = v;
            return q;
        }, values)
    }

    function log(e) {
        console.log(e);
        return e;
    }

    function extract_name(n) {
        return R.map(function(z) { return R.path('name.0', z) || z; }, n);
    }

    function p(a, v, f, message) {
        var c = R.call(B[f], a, v);
        console.log(
            f,
            a,
            R.join(', ', v),
            extract_name(c),
            message || ''
        );
        return c;
    }

    B.and = R.curry(function(attribute, values) {
        return col.find({
            $and: query(attribute, values)
        });
    });

    B.or = R.curry(function(attribute, values) {
        return col.find({
            $or: query(attribute, values)
        });
    });

    B.props = function(p) {
        var item = col.find({
            name: new RegExp(p)
        });
        return R.filter(function(v) { return v !== 'name' && v !== 'in' && v !== '_id'; }, R.keys(item[0]));
    };

    B.similar = function(p) {
        var current = R.head(col.find({name: p}));
        if (!current) return [];
        var result = R.foldl(function(acc, v) {
            return R.compose(
                R.concat(acc),
                extract_name,
                B.or(v),
                R.prop(v)
            )(current);
        }, [], B.props(p));
        return R.uniq(R.difference(result, [p]));
    };

    p('color', ['red'], 'and', 'Things with color red');
    p('color', ['red', 'yellow'], 'and', 'Things with color red and yellow');
    p('color', ['red', 'yellow'], 'or', 'Things with color red or yellow');
    p('in', ['insect'], 'and', 'Insects');
    p('insect', [], 'props', 'Properties of insects');
    p('insect', [], 'similar', 'Similar to insect (having some similar properties like small)');

}());
