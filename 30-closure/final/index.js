function addNumbers(a, b) {
    return function addTenToSum(a, b, c) {
        return a + b + c;
    }
}

var sum = addNumbers(10, 20);
sum(30);


function ask(question) {
    setTimeout(function waitASec(question) {
        console.log(question);
    }, 1000);
}

ask('What is a closure?');