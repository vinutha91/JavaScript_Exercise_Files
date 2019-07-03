var a = 2 + 3;
var b = 2 * 3;

a = a + 2;
a += 2;

a++;
a--;
++a;
--a;

var a = 10;
for (var i = 0; i < 10; i++) {
    var j = a++;
    console.log(j);
}

var a = 10;
for (var i = 0; i < 10; i++) {
    var j = ++a;
    console.log(j);
}

a = String(a);
b = Number(a);

// / - - for division and subsctraction
// = - assignment
// == - equality
// === - strict equality (recommended)
// != - lose inequality
// !== - strict inequality (recommended)
// >, <, >=, <= - greater than less than
// ++, -- - increment decrement
// && and || - logical operators
// +=, -+, *=, /= - arithmetic operator with assignment
// = assignment operator

// *  We have seen operators already
//     * +
//     * *
//     * =
// * There are 30 or 40 operators in JavaScript
//     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
// * Be aware of what operators are available
//     * ++i will increment the value of i, and then return the incremented value.
//     * i++ will increment the value of i, but return the original value that i held before being incremented.
// * Line one and two do both the same thing
//     * To me line 2 is easier
//     * Add 2 to the existing value
//     * Line 1 is complex - pull out the “a" value
// * Making code readable is subjective