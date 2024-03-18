

// You can ask well redo this prototype using the class keyword
function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.choose = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop('Kyle,');
var reactJS = new Workshop('Awayra,');

deepJS.choose('Is prototype a class');
reactJS.choose('It is not a class')