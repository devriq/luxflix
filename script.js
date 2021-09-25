/*var listaFilmes = [
  "https://i.pinimg.com/originals/6b/c2/26/6bc2265d68140799de67326d813ab6db.jpg",
  "https://i.pinimg.com/originals/25/2b/0e/252b0edc4cf6f12c89d3efa0230cf720.jpg",
  "https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2021/07/MALIGNANT-_-TW-FB.jpg?ssl=1"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

*/
var filmes = [];
var nomes = [];

function adicionarFilme() {
  var campoFilme = document.getElementById("filme").value;
  var campoNome = document.getElementById("nome").value;
  filmes.push("<img src=" + campoFilme + ">");
  nomes.push(campoNome);

  if (campoFilme.endsWith(".jpg")) {
    listarFilmesNaTela();
  } else {
    console.error("Endereço de filme inválido");
  }

  document.getElementById("filme").value = "";
  document.getElementById("nome").value = "";
}

function removerFilme() {
  var campoNome = document.getElementById("nome").value;
  console.log(campoNome);
  for (i = 0; i < nomes.length; i++) {
    if (nomes[i] == campoNome) {
      filmes.pop(i);
      nomes.pop(i);
    } else {
      i++;
    }
  }
  listarFilmesNaTela();
  document.getElementById("nome").value = "";
}

function listarFilmesNaTela(campoFilme) {
  var elmtListaFilmes = document.getElementById("poster");
  var elmtListaNomes = document.getElementById("name");
  console.log(filmes);
  console.log(nomes);
  elmtListaFilmes.innerHTML = filmes;
  elmtListaNomes.innerHTML = nomes;
}