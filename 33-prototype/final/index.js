class Training {
    constructor(teacher) {
        this.teacher = teacher;
    }

    ask(question) {
        console.log(this.teacher, question);
    }
}

var HTMLTraining = new Training('Ankit');
var CSSTraining = new Training('Amit');

HTMLTraining.ask('What is HTML?');
CSSTraining.ask('What is CSS?');