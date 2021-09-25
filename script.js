var listaFilmes = [
  {
    nome: "A Hora da Escuridão",
    poster:
      "https://i.pinimg.com/originals/7c/bb/59/7cbb591016c59b47e486eae4b9e83b52.jpg"
  },
  {
    nome: "Pânico 4",
    poster: "https://c1.staticflickr.com/6/5718/21091934512_dca7dc00c0_o.jpg"
  },
  {
    nome: "O Segredo da Cabana",
    poster: "https://cdn.fstatic.com/media/movies/covers/2018/12/1_8WHzWl3.jpg"
  }
];

/*var listaFilmes = [
  "https://i.pinimg.com/originals/6b/c2/26/6bc2265d68140799de67326d813ab6db.jpg",
  "https://i.pinimg.com/originals/25/2b/0e/252b0edc4cf6f12c89d3efa0230cf720.jpg",
  "https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2021/07/MALIGNANT-_-TW-FB.jpg?ssl=1"
];
*/
var nomes = [];
var filmes = [];

function Exibir() {
  var elmt = "";
  for (var i = 0; i < listaFilmes.length; i++) {
    elmt += "<div id='listaFilmes'>";
    elmt += "<div id='poster'>";
    elmt += "<img src='" + listaFilmes[i].poster + "'/></div>";
    elmt += "<div class='title' id='name'>" + listaFilmes[i].nome + "</div>";
    elmt += "</div>";
    console.log(elmt);

    var catalogoFilmes = document.getElementById("film");
    catalogoFilmes.innerHTML = elmt;
  }
}

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

function listarFilmesNaTela() {
  var elmtListaItem = document.getElementById("listaFilmes");
  var elmtListaFilmes = document.getElementById("poster");
  var elmtListaNomes = document.getElementById("name");

  console.log(elmtListaItem);
  elmtListaFilmes.innerHTML = filmes;
  elmtListaNomes.innerHTML = nomes;
}

//listarFilmesNaTela();
Exibir();