"42";
42;

typeof "42";
typeof Number;

"42"[0] // "4"

var a = String(42);
var b = 29 + '';

// Values and Types
// * 42 == “42"
//     * Look roughly the same
//     * They will behave differently as the values are of different types
// * String/Number
// * typeof 42
//     * Can do arithmetic operations
//     * 42/2
// * typeof “42"
//     * Can do input output with
//     * “42”[0] = “4” (first character)
// * Different behaviours are important
//     * Express intend to use as arithmetic or string
// * Consoling “42” and 42
//     * Different colors
//     * Does not convert values
//     * Alert does covert values to string
// * Can convert string into number
//     * We use coercion
//     * Can be done in different ways
//     * https://getify.github.io/coercions-grid/
//     * https://dorey.github.io/JavaScript-Equality-Table/
//         * Explicit Coercion
//             * String()/Number()
//             * toString()
//         * Implicit Coercion
//             * Side effect of operator
//             * a = a + ‘'; 

// * In JavaScript, Variables DO NOT have types
//     * The value has a type
//     * Variable holds any value of any type 
//     * Other languages hold type as well as the type

