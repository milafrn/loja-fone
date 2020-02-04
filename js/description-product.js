const $heart = window.document.querySelector(".-heart");
const $stars = document.querySelectorAll(".icon.-star");
console.log($stars[0].src);
$heart.addEventListener("click", handleClick);

function handleClick() {
  $heart.classList.toggle("-active");
}

function changeStarImage(event) {
  const element = event.target;
  element.classList.toggle("-active");
  if (element.classList.contains("-active")) {
    element.setAttribute("src", "img/Star-active.png");
  } else {
    element.setAttribute("src", "img/Star.png");
  }
}

for (let star of $stars) {
  star.addEventListener("click", changeStarImage);
}
