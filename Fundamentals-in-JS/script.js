// alert('This is every basic JS thing in one page')

// let name = prompt('What is your name?');
// let message  = "Hello, "
//
// if (name === 'Steven') {
//   alert(message + name)
// } else {
//   alert('YOU SUCK')
// }
//
// let balance = 0;
// let i = 0;
//
// while (i < 6) {
//   balance += 10;
//   i++;
// }

// alert('i = ' + balance)

////////
// STRING MANIPULATION
// const phrase = 'this is groovy'
// if(phrase.lastIndexOf('is')) {
//   alert(phrase.lastIndexOf('is'));
// }
//
// alert(phrase.slice(5, phrase.length))

// /// REGEX when format matters ///
// const myRe = /hello|goodbye/;
// const myRe1 = new RegExp("hello");
//
// const phrase = "when you say goodbye you forgot to say hello";
//
// if (myRe.test(phrase)) {
//   alert('yes');
// }

////// ARRAYS

///let aList = [10, 20, 'test', true, 99]
// alert(aList.unshift('1'))
// alert(alist)

// let currentIndex = 0

// while (currentIndex < aList.length) {
//   alert('The current value at index ' + currentIndex + ' is ' + aList[currentIndex]);
//   currentIndex++;
// }

//// DOM
const headline = document.getElementById("mainHeading")
headline.innerHTML = "holy shit";

/// EVENTS
headline.addEventListener("click", function( event ) {
  // display the current click count inside the clicked div
  headline.innerHTML = 'bad words are no good'
}, false);
