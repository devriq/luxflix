import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState([]);

  let movieList = [];

  useEffect(() => {
    // const data = fetch(
    //   "https://api.themoviedb.org/4/list/8175818?page=2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=en-US&sort_by=release_date.asc`"
    // )
    //   .then((response) => response.json())
    //   .then((response) => setMovies(response.results));
    async function loadData(){
      let dados = [];
      for(let i=1; i<12;i++){
        let data = await fetch(`https://api.themoviedb.org/4/list/8175818?page=${i}&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=en-US&sort_by=release_date.asc`)
        .then((response) => response.json())
        .then((response) => {
          setStatus(response.comments)
          response.results.map(result=> dados.push(result))
        });
      }
      setMovies(dados)
    }
    loadData();
    console.log(movies, status)
  }, []);


    
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <h1>Luxflix</h1>
        </div>

          <ul>
            <li>Horror1</li>
            <li>Horror2</li>
            <li>Horror3</li>
            <li>Horror4</li>
          </ul>
      </nav>

      <main>
        {movies.map((movie) => {
          let movieStatusId = `movie:${movie.id}`          
          
          return (
            <div className="card" key={movie.id}>
              <div className={`movie-poster ${status[movieStatusId]}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
              </div>
              {/* <div className="movie-info">
                <strong>{movie.title}</strong>
              </div>   */}
            </div>
          );
        })}
      </main>

      <footer>
        <p className="footer">
          Copyright &copy; <a href="https://github.com/devriq">DEVriq</a>.{" "}
          <span id="currentYear"></span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
