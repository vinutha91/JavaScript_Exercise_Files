function Training(teacher) {
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
};

var HTMLTraining = new Training('Ankit');
var CSSTraining = new Training('Amit');

HTMLTraining.ask('What is HTML?');
CSSTraining.ask('What is CSS?');