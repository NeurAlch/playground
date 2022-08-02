;(function() {

    'use strict';

    test('HTML (playing to generate HTML)', function() {

        var wrapStr = R.curry(function (a, b, s) {
            return a + s + b;
        });

        function catStr(s) {
            return R.join('', s);
        }

        var tagOpen = wrapStr('<', '>');
        var tagClose = wrapStr('</', '>');

        function tag(t) {
            return function() {
                var str = R.last(arguments);
                var attrs = R.take(arguments.length - 1, arguments);
                return wrapStr(tagOpen(R.join(' ', R.concat([t], attrs))), tagClose(t), text(str));
            }
        }

        var attr = R.curry(function(name, value) {
            return name + '="' + value + '"';
        });

        var cssClass = attr('class');
        var href = attr('href');

        function exists(value) {
            return value != null;
        }

        function text(s) {
            if (exists(s)) return s;
            return '';
        }

        function br(str) {
            return '<br/>' + text(str);
        }

        var div = tag('div');
        var h1 = tag('h1');
        var p = tag('p');
        var strong = tag('strong');
        var ul = tag('ul');
        var li = tag('li');
        var a = tag('a');

        function list(l) {
            return catStr(R.map(li, l));
        }

        var html = function() {
            var args = arguments;
            return function(str) {
                return R.apply(R.compose, args)(str);
            }
        };

        var some = 'Some text';
        strictEqual(
            p(),
            '<p></p>'
        );
        strictEqual(
            p(some),
            '<p>Some text</p>'
        );
        strictEqual(
            p(0),
            '<p>0</p>'
        );
        strictEqual(
            p({toString: R.always(some)}),
            '<p>Some text</p>'
        );
        strictEqual(
            p(strong(some)),
            '<p><strong>Some text</strong></p>'
        );
        strictEqual(
            html(p, strong)(),
            '<p><strong></strong></p>'
        );
        strictEqual(
            html(p, br, strong)(some),
            '<p><br/><strong>Some text</strong></p>'
        );
        strictEqual(
            html(p, strong)(some),
            '<p><strong>Some text</strong></p>'
        );
        strictEqual(
            html(div, p, strong)(some),
            '<div><p><strong>Some text</strong></p></div>'
        );
        strictEqual(
            html(ul, li)(some),
            '<ul><li>Some text</li></ul>'
        );
        strictEqual(
            list([some, some]),
            '<li>Some text</li><li>Some text</li>'
        );
        strictEqual(
            html(ul)(list([some, some])),
            '<ul><li>Some text</li><li>Some text</li></ul>'
        );
        strictEqual(
            p(cssClass('alert'), some),
            '<p class="alert">Some text</p>'
        );
        strictEqual(
            a(cssClass('btn btn-default'), href('http://example.com'), some),
            '<a class="btn btn-default" href="http://example.com">Some text</a>'
        );

        var todo = [
            'Buy book',
            'Read book',
            'Practice new ideas'
        ];
        strictEqual(
            html(div, ul)(list(todo)),
            '<div><ul><li>Buy book</li><li>Read book</li><li>Practice new ideas</li></ul></div>'
        );

        var header = html(R.curry(function(x) { return div(cssClass('header'), x); }), h1);

        strictEqual(
            header(some),
            '<div class="header"><h1>Some text</h1></div>'
        ) ;

        strictEqual(
            header(
                a(href('http://example.com'),
                    strong(some)
                )
            ),
            '<div class="header"><h1><a href="http://example.com"><strong>Some text</strong></a></h1></div>'
        )

    });

}());