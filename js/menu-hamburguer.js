const $menuActions = document.querySelector(".menu-actions");
const $menuHamburguer = document.querySelector(".menu-hamburguer");
const $navilist = document.querySelector(".navilist");

$menuHamburguer.addEventListener("click", () => {
  $menuHamburguer.classList.toggle("-active");
  openMenuActions();
});

function openMenuActions() {
  if ($menuHamburguer.classList.contains("-active")) {
    $menuActions.classList.add("-active");
    $navilist.classList.add("-active");
  } else {
    $menuActions.classList.remove("-active");
    $navilist.classList.remove("-active");
  }
}
