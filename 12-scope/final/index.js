function foo(b) {
    a = a * 2;
    a = a + b;
}

var a = 10;
var b = foo(3);

console.log(a);
console.log(b);