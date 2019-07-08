var teacher = 'Ankit';

(function anotherTeacher() {
    var teacher = 'New Teacher';
    console.log(teacher);
})();

console.log(teacher);