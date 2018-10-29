import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

// const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
const gravity = 1;
const friction = 0.9;
const numberOfBalls = 200;

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

function myFunction() {first 
    var x = document.getElementById("myNumber").value;
    document.getElementById("demo").innerHTML = x;
}

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}


function randomColor(colors) {
  return colors[Math.floor(Math.random()* colors.length)];
}

// Objects
function Object(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.color = color
}

Object.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.stroke();
    c.closePath()
}

Object.prototype.update = function() {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }

    if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {
        this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw()
}

// Implementation
let objects = [];
let ball;
let radius;
// let radius = randomIntFromRange(8, 30);

function makeColor() {
  const newColors = [];
  for (let i = 0; i < 4; i++) {
      newColors.push('#'+(Math.random()*0xFFFFFF<<0).toString(16));
  }
  return newColors;
}

function init() {

    objects = [];
    const colors = makeColor();

    for (let i = 0; i < numberOfBalls; i++) {
      radius = randomIntFromRange(8, 20)

      let x = randomIntFromRange(radius, canvas.width - radius)
      let y = randomIntFromRange(0, canvas.height  - radius)

      let dx = randomIntFromRange(-2, 2)
      let dy = randomIntFromRange(-2, 2)

      objects.push(new Object(x, y, dx, dy, radius, randomColor(colors)));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < objects.length; i++) {
      objects[i].update();
    }
    // ball.update();
    // c.fillText('HTML CANVAS FUCK', mouse.x, mouse.y)
    // objects.forEach(object => {
    //  object.update();
    // });
}

addEventListener("click", function(event) {
	init();
});

init()
animate()
