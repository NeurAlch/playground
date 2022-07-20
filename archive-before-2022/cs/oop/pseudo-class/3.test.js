const Paint = require('./3');

test('Test redPaint is red', () => {
    let redPaint = new Paint('red');
    expect(redPaint.getColor()).toBe('red');
});

test('Test redColor is an instance of Paint', () => {   
    let redPaint = new Paint('red');
    expect(redPaint).toBeInstanceOf(Paint);
});

test('Test Paint instances have the same getColor function', () => {   
    let redPaint = new Paint('red');
    let bluePaint = new Paint('blue');
    expect(redPaint.getColor === bluePaint.getColor).toBeTruthy();
});