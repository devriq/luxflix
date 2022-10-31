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
    <>      
      <nav className="flex p-6 justify-evenly md:justify-between w-full fixed bg-neutral-900">
        <div className="max-w-[100px] min-w-[75px] md:ml-24 lg:ml-2">
          <img src={LUXFLIX_LOGO} alt="" className="h-full w-full object-contain" />
        </div>

          <ul className="flex md:w-1/2 items-center justify-center font-semibold text-sm mx-auto">
            <li className="px-2"><a onClick={()=>{setList(TMDB_LISTS.horror)}}>Terror</a></li>
            <li className="px-2"><a onClick={()=>{setList(TMDB_LISTS.awarded)}}>Premiados</a></li>
          </ul>
      </nav>

      <main className="">


      { isLoading ? <div className="grid place-items-center h-screen">Carregando</div> : 
      
      <section className="flex flex-wrap w-full items-center justify-center py-16">
        
        {movies.map((movie) => {
          let movieStatusId = `movie:${movie.id}`          
          return (
              <div key={movie.id} className={`w-[16rem] m-3 border-green-300 ${status[movieStatusId]}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={`${status[movieStatusId]} h-full w-full object-cover`}/>
                {/* <div className="movie-info">
                  <strong>{movie.title}</strong>
                </div>   */}
              </div>
          );
        })}
      </section>}
      
      </main>
      
      <Footer/>
    </>
  );
}

export default App;
