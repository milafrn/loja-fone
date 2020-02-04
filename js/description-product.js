const $heart = window.document.querySelector(".-heart");
const $stars = document.querySelectorAll(".icon.-star");

$heart.addEventListener("click", handleClick);

function handleClick() {
  $heart.classList.toggle("-active");
}

arrStars = Array.from($stars);

for (let i = 0; i < arrStars.length; i++) {
  arrStars[i].addEventListener("click", event => {
    const element = event.target;
    element.classList.toggle("-active");

    let current = element.previousElementSibling;
    while (!!current) {
      element.classList.add("-active");
      current.classList.add("-active");
      current = current.previousElementSibling;
    }

    current = element.nextElementSibling;
    while (!!current) {
      element.classList.remove("-Active");
      current.classList.remove("-active");
      current = current.nextElementSibling;
    }

    if (element.classList.contains("-active")) {
      reset();
      switch (i) {
        case 4:
          arrStars[4].setAttribute("src", "img/Star-active.png");
          console.log("4", arrStars[4]);
        case 3:
          arrStars[3].setAttribute("src", "img/Star-active.png");
          console.log("3", arrStars[3]);
        case 2:
          arrStars[2].setAttribute("src", "img/Star-active.png");
          console.log("2", arrStars[2]);
        case 1:
          arrStars[1].setAttribute("src", "img/Star-active.png");
        case 0:
          arrStars[0].setAttribute("src", "img/Star-active.png");
          console.log("0", arrStars[0]);
          break;
      }
    } else {
      reset();
    }
  });
}

function reset() {
  for (let star of $stars) {
    star.setAttribute("src", "img/Star.png");
  }
}
