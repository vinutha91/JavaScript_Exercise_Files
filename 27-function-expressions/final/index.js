var clickHandler = function() {}    // anonymous function expression
var clickHandler = function keyHandler() {}    // named function expression


var ids = numbers.map(function (number) {
    return squareOfNumber(number);
});

var ids = numbers.map(function calculateSquareOf(number) {
    return squareOfNumber(number);
});
