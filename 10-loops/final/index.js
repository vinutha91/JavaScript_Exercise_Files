var a = 40;
while (a < 10) {
    a--;
    console.log(a);
}

for (var b = 10; b < 20; b++) {
    console.log(b);
}

for(;;) {}

for (var b = 10; b < 20; b++) {
    b = 11;
    console.log(b);
}

while (true) {}

// Loops
// * If is just a conditional statement
// * While is conditional plus looping
//     * Repeats the code while the condition evaluates to be false
//     * When the thing becomes false, stop doing it
// * for is a highly compressed syntax
//     * First clause:  (initialisation expression)
//         * a = 10 
//     * Second clause: (conditional expression)
//         * a < 10
//     * Third clause: (update clause) 
//         * a++
//     * We tell them to stop the loop when a gets too big
// * for(;;) {}
//     * What happens?
//     * No conditional that fails that tells it to stop running
// * A loop runs until something is false, someone stops running it.
// * How do you stop a loop? 
//     * break;
//     * Throw an error 