var expected = [
    'First item',
    'Second item',
    'Third item'
];

// JQuery

var jqValues = [];
var jqItems = $('li.list-item');

jqItems.each(function(i, v) {
    jqValues.push($(v).text());
});

strictEqual(jqValues.length, expected.length, 'JQuery same length');
strictEqual(jqValues[0], expected[0], 'First same text');
strictEqual(jqValues[1], expected[1], 'Second same text');
strictEqual(jqValues[2], expected[2], 'Third same text');

// No JQuery

var values = [];
var nodes = document.querySelectorAll('.list-item');

[].forEach.call(nodes, function(v) {
    values.push(v.textContent);
});

strictEqual(values.length, expected.length, 'No JQuery same length');
strictEqual(values[0], expected[0], 'First same text');
strictEqual(values[1], expected[1], 'Second same text');
strictEqual(values[2], expected[2], 'Third same text');