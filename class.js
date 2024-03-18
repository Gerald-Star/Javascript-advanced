//this Prototype

/*
The 'this' keyword determines how the function was called
It is more flexible and reusable

we have four rules that determines how function will be called out
1. Implicit binding rule
*/

var workshop = {
  students: "Manny",
  correction(answer) {
    console.log(this.students, answer);
  },
};
workshop.correction("What is implicit binding")

function asks(questions) {
  console.log(this.teachers, questions)
}

function otherClass() {
  var myContext = {
    teachers: 'Emmy'
  };
  asks.call(myContext, 'why?');
}


// Class oriented JavaScript