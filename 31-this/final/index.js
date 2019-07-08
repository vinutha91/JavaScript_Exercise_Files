var training = {
    teacher: 'Ankit',
    ask: function(question) {
        console.log(this.teacher, question);
    }
};

training.ask('What does this keyword mean?');


function ask(question) {
    console.log(this.teacher, question);
}

function otherContext() {
    var myContext = {
        teacher: 'Ankit'
    };

    ask.call(myContext, 'What is explicit binding?');
}