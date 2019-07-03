var a = 10;

if (a > 5) {
    a = a * 2;
}

if (a) {
    a = a * 2;
}

// Conditional statements
// * Conditional statements is how you make decisions in the programs
// * One kind of block: if block
//     * Conditional block

// * If statement says, take whatever there is in the expression inside (...), i.e. a > 5
//     * Figure out if it is true and false
// * There are statement expressions that you can put inside the (…) which may not be truthy or falsy

// * Value of a here is 10 
//     *  If you dont pass true or false, JavaScript has to convert it manually
//     * Just like we converted string to numbers and numbers to string
//     * The way it is converted is simple
//         * There is a list of values in JavaScript that are falsy value
//             * 0
//             * -0
//             * NaN
//             * “”
//             * false
//             * null
//             * undefined
//         * These are falsy value
//         * Compare to this list
//         * It is either a falsy value because it is on this list or it is a truthy value
//         * In our case a is truthy
//             * a = 10 
//             * Not in the falsy list
//             * a = 0
//             * It is a falsy value 
//         * Not recommended
//             * a === true/false

