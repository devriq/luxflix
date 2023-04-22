import Head from 'next/head';

import { useEffect, useState } from 'react';
import LUXFLIX_LOGO from '../../public/luxflix-logo.png';

import Footer from '../components/Footer/Footer';
import MovieCard from '../components/MovieCard';

const TMDB_LISTS = {
  horror: '8175818',
  awarded: '8222964',
};

function movieFilter(movies, id = '1') {
  let filtered;
  switch (id) {
    case '1':
      filtered = movies.filter(
        (movie) => parseInt(movie['release_date']?.substring(0, 4)) <= 1990
      );
      return filtered;
    case '2':
      filtered = movies.filter(
        (movie) =>
          parseInt(movie['release_date']?.substring(0, 4)) > 1990 &&
          parseInt(movie['release_date']?.substring(0, 4)) <= 2010
      );
      return filtered;
    case '3':
      filtered = movies.filter(
        (movie) =>
          parseInt(movie['release_date']?.substring(0, 4)) > 2010 &&
          parseInt(movie['release_date']?.substring(0, 4)) <= 2020
      );
      return filtered;
    case '4':
      filtered = movies.filter(
        (movie) => parseInt(movie['release_date']?.substring(0, 4)) > 2020
      );
      return filtered;
    default:
      return [];
  }
}

function Home() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState([]);
  const [list, setList] = useState(TMDB_LISTS.horror);
  const [movieEra, setMovieEra] = useState('1');

  useEffect(() => {
    async function loadData() {
      let dados = [];
      setIsLoading(true);
      for (let i = 1; i < 12; i++) {
        await fetch(
          `https://api.themoviedb.org/4/list/${list}?page=${i}&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.desc`
        )
          .then((response) => response.json())
          .then((response) => {
            setStatus(response.comments);
            response.results.map((result) => dados.push(result));
          });
      }
      setMovieEra('1');
      setMovies(dados);
      setIsLoading(false);
    }
    loadData();
  }, [list]);

  useEffect(() => {
    const data = movieFilter(movies, movieEra);
    setFilteredMovies(data);
  }, [movieEra]);

  return (
    <>
      <nav className="flex p-6 justify-evenly text-white md:justify-between w-full bg-[#111] fixed">
        <div className="max-w-[100px] min-w-[75px] md:ml-24 lg:ml-2">
          <img
            src={'luxflix-logo.png'}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

        <ul className="flex md:w-1/2 items-center justify-center font-semibold text-sm mx-auto">
          <li
            className={`${
              movieEra == '1' ? 'text-green-300' : ''
            } text-xs md:text-base cursor-pointer hover:text-green-300 px-2`}
          >
            <a onClick={() => setMovieEra('1')}>1960-1990</a>
          </li>
          <li
            className={`${
              movieEra == '2' ? 'text-green-300' : ''
            } text-xs md:text-base cursor-pointer hover:text-green-300 px-2`}
          >
            <a onClick={() => setMovieEra('2')}>1991-2010</a>
          </li>
          <li
            className={`${
              movieEra == '3' ? 'text-green-300' : ''
            } text-xs md:text-base cursor-pointer hover:text-green-300 px-2`}
          >
            <a onClick={() => setMovieEra('3')}>2011-2020</a>
          </li>
          <li
            className={`${
              movieEra == '4' ? 'text-green-300' : ''
            } text-xs md:text-base cursor-pointer hover:text-green-300 px-2`}
          >
            <a onClick={() => setMovieEra('4')}>2021+</a>
          </li>
          {/* <li className="px-2">
            <a
              onClick={() => {
                setList(TMDB_LISTS.awarded);
              }}
            >
              Premiados
            </a>
          </li> */}
        </ul>
      </nav>

      <main className="">
        {isLoading ? (
          <div className="grid place-items-center h-screen">Carregando</div>
        ) : (
          <>
            <section className="flex flex-wrap w-full items-center bg-[#111] justify-center py-16">
              {filteredMovies?.map((movie) => {
                return (
                  <MovieCard key={movie.id} movie={movie} status={status} />
                );
              })}
            </section>
            {/* <section className="flex flex-wrap w-full items-center bg-[#111] justify-center py-16">
              {movies.map((movie) => {
                return (
                  <MovieCard key={movie.id} movie={movie} status={status} />
                );
              })}
            </section> */}
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Home;
