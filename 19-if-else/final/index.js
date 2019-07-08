var students = [
    "Ankit",
    "Ravi",
    "Pratik",
    "Shailendra",
    "Nirmal"
];

for (var i = 0; i < students.length; i++) {
    sayHi(students[i]);
}

for (var student of students) {
    sayHi(student);
}

while (students.length > 0) {
    let student = students.pop();
    sayHi(student);
}

function sayHi(student) {
    console.log('Hi, ' + student);
}

// When the TEST clause fails
// i < students.length - TEST CLAUSE