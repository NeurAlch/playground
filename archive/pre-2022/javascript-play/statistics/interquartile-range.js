;(function() {

    'use strict';

    var data = [
        10, 20, 15, 13, 14,
        23, 12, 14, 25, 20,
        19, 12, 34, 54, 13,
         9, 32,  8, 11, 32,
        20, 12, 32, 12, 45
    ];
    data = R.sort(function(a, b) { return a - b; }, data);

    var n = data.length;
    var even = n % 2 === 0;
    var size = (n / 4 | 0);
    var Low = even ? R.slice(0, size * 2, data) : R.slice(0, (size * 2) + 1, data);
    var High = R.slice(size * 2, n, data);

    function median(d) {
        var M;
        var N = d.length;
        if (N % 2 === 0) {
            M = N / 2;
            M = (d[M - 1] +  d[M]) / 2;
        }
        else {
            M = N / 2;
            M = d[M + 0.5 - 1];
        }
        return M;
    }

    console.log('Median: ',  median(data));
    console.log('Q1: ',  median(Low));
    console.log('Q3: ',  median(High));
    console.log('IQR: ', median(High) - median(Low));

}());