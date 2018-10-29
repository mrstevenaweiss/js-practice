// DOM Manipulation with canvas
const canvas = document.querySelector('canvas');
// Gives us all the 2d methods
const ctx = canvas.getContext('2d');

// Fitting entire browser length and width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const mouse = {
  x: undefined,
  y: undefined
}

const maxRadius  = 60;
// const minRadius = ;
const number_of_circles = 300;
const velocity = 3;

const colorArray = [
  '#abc994',
  '#ccf4e7',
  '#8af2d5',
  '#637ddb',
  '#277c9c'
];
// track mouse movement
window.addEventListener('mousemove', (event) => {

  mouse.x = event.x;
  mouse.y = event.y;
  console.log("Object", mouse);
})

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

// create an object to do various circles
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

  this.draw = function() {
    // let color = "#"+((1<<24)*Math.random()|0).toString(16);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // ctx.strokeStyle = color;
    // ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  this.update = function() {
    // Creating left/right boundaries
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    // Creating top/bottom boundaries
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.y += this.dy
    this.x += this.dx;

    // Interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50)  {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    this.draw();
  }

}


const circleArray = [];

for (let i = 0; i < number_of_circles; i++ ) {
  let radius = Math.random() * 4+2;
  let x = Math.random() * (window.innerWidth - radius*2) + radius;
  let y = Math.random() * (window.innerHeight - radius*2) + radius;
  let dx = (Math.random() - 0.5) * velocity;
  let dy = (Math.random() - 0.5) * velocity;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i =0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();



//
// // Rectangles
// ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
// ctx.fillRect(200, 200, 100, 100);
// ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
// ctx.fillRect(400, 300, 100, 100);
//
// // Line
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.strokeStyle = "blue";
// ctx.lineTo(400, 300);
// ctx.strokeStyle = "#BADA55";
// ctx.stroke();
//
// Arcs
// ctx.beginPath();
// ctx.arc(200, 200, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "blue";
// ctx.stroke();
//
// for (let i = 0; i < 100; i++ ) {
//   let color = "#"+((1<<24)*Math.random()|0).toString(16);
//
//
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//
//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//   ctx.strokeStyle = color;
//   ctx.stroke();
// }
//
// // Canvas Objects, Generally
// // Circles / Bezier Curves / Images / Text
