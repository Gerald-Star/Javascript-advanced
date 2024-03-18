//Functions




// ? Function Expressions
/*
Function expressions are values that can be assigned as variables elsewhere. 
The can be pass as an arguement to other functions, or returned from functions-
-We call it a first class value - eg string
*/

//? Examples of function Expressions

// ! Annonymous handler
var clickHandler = function () {

};

//! Named Function Expressions
var keyHandler = function keyHandler() {

}
/*
Why Named function expression is preferred is because their descriptive name
tells you what they are doing.
*/

// ? Example Function Expression IIFE

var teacher = "Kyle";
(function anotherTeacher() {
  var teacher = "Suzzy";
  console.log(teacher);
})(); // ()this is where it is executed
console.log(teacher);


//? Instead of IIFE, we use block scope : encapsulation
/*
we switch from using a var to let keyword
The let keyword will help create a variable inside a curly lace block
Helps variable ti be nicely collected together
*/

var chef = "Andy";
{
  let chef = "Ofi"
  console.log(chef)
}

console.log(teacher)

// ! Block let

function diff(x, y) {
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
  }
  return y - x;
}


//Closure
/*
Closure is when a function 'remembers' the variables outside of it, even if you pass
that function elsewhere.
*/

// ! set time out

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask('What is closure')

// Another example is reassign the function as a value

function yourQuestion(mention) {
  return function askYourQuestion() {
    console.log(mention)
  };
}

var myQuestion = yourQuestion('What is block scope?');

myQuestion()
// ? Example of Function Expression - Arrow Function





//Usage of batiks for interpolated strings
//What is a Function
//Calling a function

function timeRemaining(timeElasped, endTime) {
  return endTime - timeElasped;
}

var timeLeft = timeRemaining(42, 70);
timeRemaining();
console.log(timeLeft)

//? make this code shorter

function totalExam(textScore, examScore) {
  return (textScore + examScore) / 2;
}

var finalScore = totalExam(40, 100);
totalExam()
console.log(finalScore)


// Exercise- 
/*
1. Define and addFavBook function
2. If the provided bookName string does not have word 'Great in it,
add it ti the favoriteBooks array

Hints-
`someStrings.includes(anotherString)` will return `true`
if anotherString is found inside someString, or false, otherwise

- Use `!` to negate a boolean value (change `true ` to `false` or vice versa)
- `someArray.push(value)` will add a value to the end of the array

3. Define a function `printFavoriteBook()` function that receives no parameters

4.  `printFavoriteBooks()` should first print a message like 'FavoriteBook: ..' and include 
the number of books in the favorite array. 


HINT
*/
var favoriteBooks = [];
addFavBooks('Mountain on Fire');
addFavBooks('The Great of Grace');
addFavBooks('Crime and Love');
addFavBooks('Great Expectations');
addFavBooks('Bonded Criminals');
addFavBooks('Bonded Love Mammals');

function addFavBooks(bookName) {
  //console.log(bookName) printed the entire book
  if (bookName.includes('Love')) { // use ! to negate the expression
    favoriteBooks.push(bookName)
  }

}

function printFavoriteBook() {
  console.log(`
  Favorite BooK: ${favoriteBooks.length}
   `)
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

printFavoriteBook()
console.log(favoriteBooks) //printed arrays of books without 'Great'