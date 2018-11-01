//
// function Course(views){
//   this.views = views;
//   this.updateViews = () => {
//     return ++this.views;
//   }
//
// }
//
// console.log(Course());
//
// let course1 = new Course(0);
// let course2 = new Course(10);
// console.log("current views", course1.views);
// course1.updateViews()
// console.log("current views", course1.views);
//
// let courses = [course1, course2]

function doSomeMath() {
  let a = 5;
  let b = 4;

  function multiply() {
    let result = a+b;
    return result;
  }
  return multiply;
}
let theResult = doSomeMath();
let multiply = multiply()

// console.log('the result', theResult());
console.log('the result', multiply);
