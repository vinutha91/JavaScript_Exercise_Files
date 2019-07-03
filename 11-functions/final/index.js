function printFinalAmout(amount) {
    amount = amount + (amount*18)/100;
    console.log(amount.toFixed(2));
}

printFinalAmout(300);

// Functions
// * A function is a way to logically group together a piece of code
// * A function makes this block of code call more than once
//     * Kind of like a loop, kind of like a block, controlled by us.
// * It is like putting a special set of instructions aside
//     * As many times I need it I can call them at once
//     * Once, 5 times, 10 times
// * It does not matter if we put function before our variables
// * We can pass a argument/parameter to the function
//     * When we call the function, we pass in what is called an argument
//     * When we declare a function, the variables passed to the function is called parameters
// * Can pass function as an argument
// * Can pass functions result
// * Functions can return value as well

