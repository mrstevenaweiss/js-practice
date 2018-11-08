
const CTA = document.querySelector('.cta a')
const ALERT = document.querySelector('#booking-alert')

console.log(CTA);

CTA.classList.remove("hide")
ALERT.classList.add("hide")

function reveal(e, current){
  e.preventDefault();

  current.innerHTML == "Book Now!" ? CTA.innerHTML = "Oooops!" : CTA.innerHTML = "Book Now!"

  ALERT.classList.toggle("hide")
}

CTA.addEventListener("click", function(e) { reveal(e,this); }, false);
