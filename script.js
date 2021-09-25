//Lista de objetos 'Filme'
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
  },
  {
    nome: "A Mulher de Preto",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjEwMzIxOTg3N15BMl5BanBnXkFtZTcwMjI4ODUzNw@@._V1_.jpg"
  },
  {
    nome: "Armadilha",
    poster: "https://upload.wikimedia.org/wikipedia/pt/4/43/ATM_poster.jpg"
  },
  {
    nome: "A Última Casa da Rua",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjIxNTUwNTU4N15BMl5BanBnXkFtZTcwNTE0MTI3Nw@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    nome: "Você é o Próximo",
    poster: "https://m.media-amazon.com/images/I/81p-c-aPToL._SY445_.jpg"
  },
  {
    nome: "Uma Noite de Crime",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/9/94/The_Purge_film_poster.jpg"
  },
  {
    nome: "Tumba Aberta",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc1MDM5MTI0Ml5BMl5BanBnXkFtZTgwOTMyODI1MDE@._V1_.jpg"
  },
  {
    nome: "Mama",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/1/11/Mama_2012_poster.jpg"
  },
  {
    nome: "Assim na Terra como no Inferno",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/3/3c/As_Above%2C_So_Below.png"
  },
  {
    nome: "Sobreviventes",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzE3NTMwOTk5OF5BMl5BanBnXkFtZTgwODcxNTE1NDE@._V1_.jpg"
  },
  {
    nome: "Ouija",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ1NzcwMTU5MF5BMl5BanBnXkFtZTgwOTE5MzEyMjE@._V1_FMjpg_UX1000_.jpg"
  },
  {
    nome: "Os 13 Pecados",
    poster:
      "https://callmemisterglass.files.wordpress.com/2014/04/13-sins-poster-high-resolution1.jpg"
  },
  {
    nome: "Regressão",
    poster: "https://br.web.img3.acsta.net/pictures/15/08/17/13/00/015882.jpg"
  },
  {
    nome: "Réfem do Medo",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTcwMDYwNTQ4N15BMl5BanBnXkFtZTgwMzg3Nzk4OTE@._V1_.jpg"
  },
  {
    nome: "Águas Rasas",
    poster: "https://m.media-amazon.com/images/I/51bwDcggRML._AC_.jpg"
  },
  {
    nome: "O Homem das Trevas",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/5/5c/Don%27t_Breath_2016.jpg/230px-Don%27t_Breath_2016.jpg"
  },
  {
    nome: "Quando as Luzes se Apagam",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/d/dc/Lights_Out_2016_poster.jpg"
  },
  {
    nome: "Demônio de Neon",
    poster:
      "https://i.pinimg.com/originals/fd/88/de/fd88de81243449b87761517da432d248.jpg"
  },
  {
    nome: "Invasão Zumbi",
    poster:
      "https://pm1.narvii.com/6637/0e8ee4e19cfdbaed45e7dab6760bb85129002fe9_hq.jpg"
  },
  {
    nome: "Dia de Trabalho Mortal",
    poster: "https://br.web.img3.acsta.net/pictures/17/01/06/12/20/534187.jpg"
  },
  {
    nome: "Corra",
    poster: "https://upload.wikimedia.org/wikipedia/pt/0/02/Get_Out_2017.png"
  },
  {
    nome: "Cargo",
    poster: "https://br.web.img3.acsta.net/pictures/17/10/23/12/33/0246129.jpg"
  },
  {
    nome: "Hereditário",
    poster:
      "https://razaodeaspecto.com/wp-content/uploads/2018/06/p9fmuz2Oj3HtEJEqbIwkFGUhVXD.jpg"
  },
  {
    nome: "Suspíria",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/b/ba/Suspiria_%28filme_de_2018%29.png"
  },
  {
    nome: "Aniquilação",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTA1NjI1NjAyODBeQTJeQWpwZ15BbWU4MDQ2NzY3ODQz._V1_.jpg"
  },
  {
    nome: "Bird Box",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/0/06/Bird_Box_-_filme_p%C3%B4ster.jpeg"
  },
  {
    nome: "Verdade ou Desafio",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/2/21/Truth_or_Dare_%282018%29.jpg"
  },
  {
    nome: "Vende-se esta Casa",
    poster: "https://br.web.img3.acsta.net/pictures/17/12/29/12/41/2418041.jpg"
  },
  {
    nome: "Nós",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/4/43/Us_2019_-_P%C3%B4ster.jpg"
  },
  {
    nome: "Midsommar",
    poster:
      "https://ffw.uol.com.br/app/uploads/noticias/2019/07/midsommar-1.jpg"
  },
  {
    nome: "Casamento Sangrento",
    poster: "https://br.web.img3.acsta.net/pictures/19/06/21/19/47/4841614.jpg"
  },
  {
    nome: "Cemitério Maldito",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjJiN2UwYWItNWJjNi00Zjg4LWE5NmItMmM4N2I3ZjY3OTY2XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_.jpg"
  },
  {
    nome: "O Silêncio",
    poster:
      "https://i.pinimg.com/originals/b7/2a/ee/b72aeedc2d31a16a550ca1c0a9d4606e.jpg"
  },
  {
    nome: "O Segredo do Refúgio",
    poster: "https://br.web.img3.acsta.net/pictures/20/05/22/09/24/4394782.jpg"
  },
  {
    nome: "A Lenda de Candyman",
    poster:
      "https://www.sanremonews.it/fileadmin/archivio/sanremonews/film_Candyman_-_locandina.jpg"
  },
  {
    nome: "Maligno",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/8/85/Malignant_2021.jpg/233px-Malignant_2021.jpg"
  }
];

//Função para exibir os filmes
function exibirFilmes() {
  var elmt = "";
  for (var i = 0; i < listaFilmes.length; i++) {
    elmt += "<div id='listaFilmes'>";
    elmt += "<div id='poster'>";
    elmt += "<img src='" + listaFilmes[i].poster + "'/></div>";
    elmt +=
      "<div class='title' id='name'><p>" + listaFilmes[i].nome + "</p></div>";
    elmt += "</div>";
    console.log(elmt);

    var catalogoFilmes = document.getElementById("film");
    catalogoFilmes.innerHTML = elmt;
  }
}

exibirFilmes();

// Funcionalidades extras
/*
var nomes = [];
var filmes = [];


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
*/

//listarFilmesNaTela();
