import React, { useEffect, useState } from "react"
import MovieShow from "../MovieShow"
import Movie from './../../Movie';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './list.css'

function Listagem({ listNumber, movieList, movieStatus }: { listNumber: string; movieList: Movie[]; movieStatus: any[] }): JSX.Element {
    const [activeMovieList, setActiveMovieList] = useState<Movie[]>([]);
    const [scrollX, setScrollX] = useState(0)

    function handleLeftArrow(){
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x>0){
            x=0
        }
        console.log(scrollX)
        setScrollX(x)
    }

    function handleRightArrow(){
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = activeMovieList.length *300;
        if((window.innerWidth-listW)>x){
            x=(window.innerWidth-listW)-55;
         }
        setScrollX(x)
    }

    useEffect(function (): void {
        if (listNumber === '1960-1995') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) <= 1995);
            setActiveMovieList(result);
        }
        if (listNumber === '1996-2010') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 1996 && parseInt(movie.release_date.substring(0, 4)) <= 2010) 
            setActiveMovieList(result)
        }
        if (listNumber === '2011-2020') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2011 && parseInt(movie.release_date.substring(0, 4)) <= 2020)
            setActiveMovieList(result)
        }
        if (listNumber === '2021-2022') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2021)
            setActiveMovieList(result)
        }
    }, [listNumber, movieList]);

    return (
        <div>
            <div className="movieShow--left" onClick={handleLeftArrow}>
                <ArrowBackIosIcon fontSize="large" />  
            </div>
            <div className="movieShow--right"  onClick={handleRightArrow}>
                <ArrowForwardIosIcon fontSize="large"/>  

            </div>
            <section className="movie-list" style={{
                marginLeft:scrollX,
                width:activeMovieList.length*300
            }}>

                {activeMovieList.map((movie: Movie) => {
                    return <MovieShow key={movie.id} movie={movie} status={movieStatus} />
                })}
            </section>
        </div>
    )
}
export default Listagem;