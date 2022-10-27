import { useEffect, useState } from "react";
import "./App.css";
import LUXFLIX_LOGO from './assets/luxflix-logo.png'

import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail";

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
        await fetch(`https://api.themoviedb.org/4/list/${list}?page=${i}&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc`)
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
    <div className="bg-black text-white grid min-h-screen justify-between max-w-full">
      
      <nav className="border-b flex flex-col md:flex-row max-h-[10vh] px-10 h-full w-screen py-2">
        <div className="mx-auto max-h-[4vh]">
          <img src={LUXFLIX_LOGO} alt="" className="h-full w-full object-cover" />
        </div>

          <ul className="flex font-semibold text-xs mx-auto px-4 items-center justify-start h-full max-h-[5vh]  flex-1">
            <li className="px-2"><a onClick={()=>{setList(TMDB_LISTS.horror)}}>Terror</a></li>
            <li className="px-2"><a onClick={()=>{setList(TMDB_LISTS.awarded)}}>Premiados</a></li>
          </ul>
      </nav>

      <main className="min-h-[80vh] grid justify-around">


      { isLoading ? <div className="grid place-items-center">Carregando</div> : 
      
      <div className="flex px-5 flex-wrap w-full items-center justify-center">
        
        {movies.map((movie) => {
          let movieStatusId = `movie:${movie.id}`          
          return (
              <div key={movie.id} className={`w-[220px] movie-poster m-1 border ${status[movieStatusId]}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={`${status[movieStatusId]} h-full w-full object-cover`}/>
                {/* <div className="movie-info">
                  <strong>{movie.title}</strong>
                </div>   */}
              </div>
          );
        })}
      </div>}
      
      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
