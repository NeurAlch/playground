;(function() {

    'use strict';

    var db = new ForerunnerDB();
    var col = db.collection('brain-1');

    var connections = [
        [
            'apple',
            'fruit',
            'red',
            'yellow',
            'green',
            'sweet',
            'small'
        ],
        [
            'strawberry',
            'fruit',
            'red',
            'sweet',
            'small'
        ],
        [
            'blueberry',
            'fruit',
            'blue',
            'sour'
        ],
        [
            'potato',
            'vegetable',
            'brown'
        ],
        [
            'spider',
            'big',
            'insect'
        ],
        [
            'bee',
            'small',
            'insect',
            'honey'
        ],
        [
            'ant',
            'small',
            'insect'
        ],
        [
            'lion',
            'medium',
            'mammal'
        ],
        [
            'fire',
            'red',
            'hot'
        ],
        [
            'grass',
            'green',
            'plant'
        ],
        [
            'small',
            'size'
        ],
        [
            'medium',
            'size'
        ],
        [
            'big',
            'size'
        ],
        [
            'fruit',
            'food'
        ],
        [
            'sweet',
            'taste'
        ],
        [
            'vegetable',
            'food'
        ],
        [
            'insect',
            'animal'
        ],
        [
            'mammal',
            'animal'
        ],
        [
            'red',
            'color'
        ],
        [
            'yellow',
            'color'
        ],
        [
            'green',
            'color'
        ]
    ];

    R.forEach(function(v) {
        col.insert({
            name: v[0],
            relations: R.tail(v)
        })
    }, connections);

    function log(e) {
        console.log(e);
        return e;
    }

    function p(l, f, message) {
        var c = R.call(f, l);
        console.log(
            f.name,
            R.join(', ', l),
            R.map(function(v) { return R.path('name', v) || v; }, c),
            message || ''
        );
        return c;
    }

    function relations(_relations) {
        return R.map(function(v) { return { relations: v }; }, _relations);
    }

    function and(_relations) {
        return col.find({ $and: relations(_relations) });
    }

    function or(_relations) {
        return col.find({ $or: relations(_relations) });
    }

    var extract = R.curry(function(attr, v) {
        return v[attr];
    });

    var name = extract('name');

    function find_with_attribute(attr) {

        var attributes = R.compose(
            R.map(name),
            and
        )(attr);

        return or(attributes);
    }

    function find_similar(related) {

        var attributes = col.find({
            $and: R.map(function (v) {
                return {name: new RegExp('^' + v + '$')};
            }, related)
        });

        if (R.isEmpty(attributes)) { return []; }

        var search = R.foldl(
            function(acc, val) { return R.concat(extract('relations', val), acc); },
            [],
            attributes
        );

        return or(search);

    }

    function find_related(v) { return R.compose(or, R.map(name), find_similar)(v); }

    // Examples:

    p(['size'], and, 'Are sizes');
    p(['food'], and, 'Are foods');
    p(['fruit', 'red'], and, 'Are fruits and red');
    p(['fruit', 'red', 'small'], and, 'Are fruits, red and small');
    p(['red', 'green'], or, 'Are red or green');

    p(['size'], find_with_attribute, 'All have size');
    p(['food'], find_with_attribute, 'All are foods');
    p(['animal'], find_with_attribute, 'All are animals');
    p(['color'], find_with_attribute, 'All have color');

    p(['red'], find_similar, 'List of things with same attributes than red like color');
    p(['ant'], find_similar, 'List of things with same attributes than ant like small and insect');
    p(['apple'], find_similar, 'List of things with same attributes than apple like red, yellow, small...');

    p(['red'], and, 'All are red');
    p(['red'], find_related, 'All have color');

    p(['fruit'], and, 'All are fruits');
    p(['fruit'], find_related, 'All are food');

    p(['insect'], and, 'All are insect');
    p(['insect'], find_related, 'All are animals');

    p(['small'], and, 'All are small');
    p(['small'], find_related, 'All have size');

}());