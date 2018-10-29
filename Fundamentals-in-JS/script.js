// alert('This is every basic JS thing in one page')

let name = prompt('What is your name?');
let message  = "Hello, "

if (name === 'Steven') {
  alert(message + name)
} else {
  alert('YOU SUCK')
}


let balance = 0;
let i = 0;

while (i < 6) {
  balance += 10;
  i++;
}

alert('i = ' + balance)
