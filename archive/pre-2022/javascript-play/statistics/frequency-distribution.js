;(function($, R) {

    'use strict';

    var data = [
        1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 4, 2, 1, 5, 1, 3, 5, 6, 1, 3, 2, 6, 8, 0, 3, 2, 6, 2, 1, 5, 3, 1, 3,
        2, 5, 3, 7, 5, 8, 4, 8, 3, 2, 4, 6, 7, 4, 2, 5, 2, 4, 2, 5, 7, 6, 2, 3, 4, 5, 1, 7, 4, 8, 9, 9, 0
    ];

    var cumulative = 0;
    var frequency_sum = 0;
    var ascii_chart = '';
    var table_header = '<thead><tr><th>Value</th><th>Frequency</th><th>Relative Frequency</th><th>Cumulative Relative Frequency</th></tr></thead>';
    var table_body = $('<tbody>');
    var make_td = function(v) { return $('<td>').text(Math.round(v * 100) / 100); };
    var append = R.curry(function($elem2, $elem) { return $elem.append($elem2); });
    var frequency = R.foldl(function(acc, elem) {
        if (acc[elem] == null) { acc[elem] = 1;  }
        else { acc[elem] += 1; }
        return acc;
    }, {}, data);

    $.each(frequency, function(k, v) {
        var bar = '';
        R.forEach(function() { bar += 'X'; }, R.range(0, v));
        ascii_chart += k + ':' + bar + '\n';
        frequency_sum += v;
    });

    $.each(frequency, function(k, v) {
        var tr = $('<tr>');
        var value = k;
        var frequency = v;
        var relative_frequency = v / frequency_sum;
        cumulative = cumulative + relative_frequency;
        R.compose(
            append(make_td(cumulative)),
            append(make_td(relative_frequency)),
            append(make_td(frequency)),
            append(make_td(value))
        )(tr);
        table_body.append(tr);
    });

    $('div.chart').append(
        $('<pre>').text(ascii_chart)
    );

    $('div.table').append(
        $('<table cellspacing="0">').append(table_header).append(table_body)
    );

}(jQuery, R));