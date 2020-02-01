/*
1 - Ter a janela (browser) na mão => OK
2 - Ter o HTML na mão => Ok
3 - Pegar o coração => OK
4 - Pegar clique no coração
5 - No momento que o usuário clicar, nós queremos mostrar um texto AE
 */

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleclick);

function handleclick() {
  console.log("ae");
}
