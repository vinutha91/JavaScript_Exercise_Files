((a) = ((b)*(2)));

a = b * 2;

(((a) = (b)*(2)));

a = b * 2 + foo(c*3);

[[a] = [[[b] * [2]] + [[foo]( [[c] * [3]] )]]]; 




a = b + (2 * foo(c*3));


// * Statements are comprised of expressions
// * a = b*2;
//     * Several Expressions
//         * 2 = literal value expression
//         * b = identifier expression
//         * b*2 = arithmetic expression (multiplication)
//         * a = b*2 = assignment expression 
//         * (a=((b)*(2))); (expression and a statement)
//     * a = b * 2 + foo(c*3);
//     * [[a] = [b] * [2] + [[foo]( [[c] * [3]] )]];
//         * Which one gets solved first?
//             * + or *
//             * Operator Precedence
//                 * Brackets
//                 * /
//                 * *
//                 * +
//                 * -
//             * Forcibly override operator precedence using ( brackets )
//                 * a = b * (2 + foo(c*3));
//                     * Plus should happen before multiplication 
//                 * a = (b * 2) + foo(c*3);
//                     * For developer purpose
//                     * For readability purpose
//                     * Here ( ) are not required
//                 * Which one happens first?
//                     * b*2 or foo(c*3)
//                     * Left to right
//                 * a = b + 2 * foo(c*3);
//             * a + b… a and b are Binary operands

