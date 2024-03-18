//? Scope /Closures
//How scope works - Where Javascript looks things
// where memory it is. / all the rules that goes in figuring out an expression
// Scope is the rule figuring out how variable gets sets

// non strict mode

var teacher = "Flo";

function otherClasses() {
  teacher = 'Suzy';
  topic = "React";
  console.log('Welcome')
}

otherClasses()
teacher;
topic;


// ? undefined vs undeclared
/*
Variable that is undeclared never have any references
*/ 