// variables in Javascript
//What is a variable

var name = "Kyle Simp";
var age;
age = 39;
var friends = ['Manna', 'Onyi'];
console.log(friends.length)
console.log(friends[1])

//Operators in JavaScripts

//Increment Operators

var years = 29;
years++;
years += 2;

console.log(years);


var teacher = "kyle";
var twitter = "getify";
var age = 20;

function whoAmI(myName, twitterHandle, myAge) {
  console.log(`
  Hi, I'm ${myName} (aka ${twitterHandle}), and I'm ${myAge} years old!
  `

  );

}
whoAmI(teacher, twitter, age)


//What is Expressions and Statements in Javascript
// the entire block of code is a statement
var myScore = 10; // myScore, 1, 2 etc are all expressions

myScore = 1 + (myScore * 2);
console.log(myScore)


//Decisions on JavaScript
//The primary way to make decision is using the if else statement

var studentScores = 20;
if (studentScores <= 10) {
  console.log('Exam passed'); //if returns true, that ends the condition, if false, it goes to the second statement
}
else {
  console.log('Exam not passed')
}


var isEnrolled = true;
if (isEnrolled) {
  console.log('Take the class!');
}
else {
  console.log('Enroll first')
}



//LOOPS - The way to repeat things
//For loops
//while loops


//While Loop
var students = ['Achi', 'Oke', 'Sussy'];

while (students.length > 0) {
  let student = students.shift();
  console.log(`Hello, ${student}`);

}

// .pop reverses the order
// .shift outputs the order in the right way

/*
var students = ['Mark', 'John', 'Oge'];
for (let i = 0; i < students.length; i++) {
  greetStudent(students[i]);
}
for (let student of students) {
  greetStudent(student);
}

console.log(students)
*/



