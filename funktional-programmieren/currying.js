const studentGrades = [
    {name:'Joe',greade:88},
    {name:'Jen',greade:94},
    {name:'Steph',greade:77},
    {name:'Allen',greade:60},
    {name:'Gina',greade:54}
];

const studentFeedback = [
    'Nice Job Joe, you got an b',
    'Excellent Job Jen, You got an a',
    'Well done Steph, you got an c',
    'What happend Allen, you got an d',
    'Not good Gian, you got an f'
];

const greet = (studentFeedback) => {
    function greetName(studentGrades) {
    if(studentGrades.grade >= 90) return 'Excellent Job Jen, You got an a ${studentGrades.name}';
    if(studentGrades.grade >= 80) return 'Nice Job Joe, you got an b ${studentGrades.name}';
    if(studentGrades.grade >= 70) return 'Well done Steph, you got an c ${studentGrades.name}';
    if(studentGrades.grade >= 60) return 'What happend Allen, you got an d ${studentGrades.name}';
    return 'Not good Gian, you got an f ${studentGrade.name}';
    }
    return greetName;
};

console.log(studentGrades.map(greet(studentFeedback)));

const R = require('./ramba.min.js');

const nameArray = ["Dominic", "Pränz", "Morhaf"];

const ciaoFunction=R.curry((prefix, item) => prefix + item);
const nameHallo=R.map(ciaoFunction('Ciao bella'), nameArray);

console.log(nameHallo);

// Impure
let counter = 0;

function increment() {
    counter++;
}

increment();
console.log(counter);

// Pure
let counter2 = 0;

function increment(counter2) {
    return counter2 + 1;
};

counter2 = increment(counter2);
console.log(counter2);