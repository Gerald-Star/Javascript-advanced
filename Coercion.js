// ? Types / Coercion - Example string concatenantion - number to string
// ? String simplistic coercion

//The way to convert from one type to another: coercion

//Primitive Types - In JavaScript, everything is an object -false

/* 
undefined
String
number
boolean
object
symbol

null
function

*/

// ? Primitive Types: typeof
var v;
console.log(typeof (v))

var a = 1;
console.log(typeof (a))

var b = 'True';
console.log(typeof (b))

var c = 1.1;
console.log(typeof (c))

var e = {};
console.log(typeof (e))

var f = Symbol();
console.log(typeof (f))

//Nan operations
/*
var greetings = "Hello, Emmy!"
var timeOfDay = greetings / 2;
timeOfDay;
Number.isNan(timeOfDay) // NaN

*/

// ? Coercion  String concatenation (number to string)
var msg1 = 'There are ';
var numStd = 13;
var msg2 = ' students.';
console.log(msg1 + numStd + msg2)
//There are 16 students

console.log(`There are ${numStd + ""} students.`);
//?converting something to a string
/*
Number + Number = Number
Number + String = String
String + Number = String
String + String = String
*/

/*
function addAStudent(numStd) {
  return numStd + 1;

}

addAStudent(
  Number(studentsInputElem.value)
);
*/
//? The Number function is converting from the string to number


// ? Coercion :Boolean
/*

 ! Falsy 

0.-0, null, NaN, false, undefined 

! Truthy
'foo', 23, {a:1}, [1.3], true, function(){..}

*/

/*
if (!!studentsInputElem.value) {
  numStd = Number(studentsInputElem.value);
}
while (newStudents.length > 0) {
  enrollStudent(newStudents.pop());
}

? Coercion: Implicit can be good

var workshopEnrollment1 = 14;
var workshopEnrollment2 = workshopEnrollment2.value;

if (Number(workshopEnrollment1) < Number(workshopEnrollment2)) {
  //
}

if (workshopEnrollment1) < (workshopEnrollment2) {
  //
}
*/

// ? A quality JS Program embraces coercions, making sure the types involved 
// ? in every operations are clear.



