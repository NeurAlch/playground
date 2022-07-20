;(function($, R) {

    'use strict';

    var data = [
        1, 23, 3, 4, 6, 7, 8, 12, 33, 45, 12, 12, 22, 30, 1, 7, 8, 9, 10,
        6, 7, 3, 4, 6, 2, 7, 8, 9, 0, 2, 9, 4, 2, 4, 44, 34, 21, 34, 93
    ];

    data = R.sort(function(a, b) { return a - b; }, data);

    var n = data.length;
    var sum = R.sum(data);
    var mean = sum / n;
    var median;

    if (n % 2 === 0) {
        median = n / 2;
        median = (data[median - 1] +  data[median]) / 2;
    }
    else {
        median = n / 2;
        median = data[median + 0.5 - 1];
    }

    console.log('Data: ', data);
    console.log('Length: ', n);
    console.log('Even: ', n % 2 === 0);
    console.log('Mean: ', Math.round(mean * 100) / 100);
    console.log('Median: ', median);

}(jQuery, R));