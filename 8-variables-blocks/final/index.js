// Bad practice
a = 42;

"use strict" // would have thrown error

var a = 42;
var a;
a = 42;
// hoisting

function a() {}
var a;
a = function() {}


var a;

{
    var a = 42;
    foo(a/2);
}

var b;

// look at a > 10 statement and figure out if it is true or false
if (a > 10) {
    var a = 42;
    foo(a/2);
}

function bar() {}; // function declaration
var bar = function() {}; // function expressions attached to variable declaration
var bar = function baz() {}; // function expressions attached to variable declaration

// block is associated with function and will not execute unless you run the function

// Variables and Blocks
// * If in a program I start writing 
//     * a = 42
//     * It is a bad practice
//     * a is never formally declared
//     * It should be declared before the first time you use it
//     * var a = 42;
//         * var a;
//         * a = 42
//         * hoisting
//         * Even works with function a() {}
// * There is notion in many programming languages and in JavaScript it is no different
//     * Collection of logical statements can be kept together
//     * This can be kept inside {}
//     * It is known a a block
//     * Most of the time block dont appear alone
//     * They appear associated with another kind of statement
//         * function
//         * for
//         * if
//     * For example: if Statement
//         * We go in to the block if we answer yes to the statement
//             * In programmatic language yes and no are called true and false
//     * Collection of code attached to different kinds of statement
//         * How, if and when the code gets executed