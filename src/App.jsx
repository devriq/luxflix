import { useEffect, useState } from "react";
import "./App.css";
import LUXFLIX_LOGO from './assets/luxflix-logo.png'

import Footer from "./components/Footer/Footer";

const TMDB_LISTS = {
  horror: '8175818',
  awarded: '8222964'
}


function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState([]);
  const [list, setList] = useState(TMDB_LISTS.horror);


  useEffect(() => {
    async function loadData(){
      let dados = [];
      setIsLoading(true)
      for(let i=1; i<12;i++){
        await fetch(`https://api.themoviedb.org/4/list/${list}?page=${i}&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=en-US&sort_by=release_date.asc`)
        .then((response) => response.json())
        .then((response) => {
          setStatus(response.comments)
          response.results.map(result=> dados.push(result))
        });
      }
      setMovies(dados)
      setIsLoading(false)
    }
    loadData();
  }, [list]);



  return (
    <div className="App">
      <nav>
        <div className="logo">
          <img src={LUXFLIX_LOGO} alt="" className="" />
        </div>

          <ul>
            <li><a onClick={()=>{setList(TMDB_LISTS.horror)}}>Terror</a></li>
            <li><a onClick={()=>{setList(TMDB_LISTS.awarded)}}>Premiados</a></li>
          </ul>
      </nav>

      { isLoading ? <main className="box">Carregando</main> : 
      
      <main>
        {movies.map((movie) => {
          let movieStatusId = `movie:${movie.id}`          
          return (
            <div className="card" key={movie.id}>
              <div className={`movie-poster ${status[movieStatusId]}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={`${status[movieStatusId]}`}/>
              </div>
              {/* <div className="movie-info">
                <strong>{movie.title}</strong>
              </div>   */}
            </div>
          );
        })}
      </main>}
      
      <Footer/>
    </div>
  );
}

export default App;
