const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106.583 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(5)).toBe(532.92);
})

test("One Yen should be 0.063 pound", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(100)).toBe(0.6255);
})

