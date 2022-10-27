import React from 'react'

function MovieDetail(movie,status,movieStatusId) {
  return (
    <div className={`h-full w-[80vw] mx-auto m-1 border relative ${status[movieStatusId]}`}>
        <div className='blur-[.1rem]'>
        <img src={`https://image.tmdb.org/t/p/w500/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg`} className={`${status[movieStatusId]} h-full w-full object-cover`}/>
        </div>


        <div className='absolute font-bold w-1/2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>

        <div class="card-movie__title md:text-6xl text-sm">Interstellar</div>

        <div class="card-movie__details flex justify-between text-[.3rem]">

          <span class="card-movie__details-item">2014</span>

          <span class="card-movie__details-item">169 mins</span>

          <ul class="flex">
            <li className='px-1'>Adventure</li>
            <li className='px-1'>Drama</li>
            <li className='px-1'>Sci-fi</li>
          </ul>

        </div>

        <div class="card-movie__description text-[.4rem] py-6 text-justify leading-normal">

          <p>With our time on Earth coming to an end, a team of explorers undertakes the most important mission in human history; traveling beyond this galaxy to discover whether mankind has a future among the stars.</p>

        </div>


        <div class="card-movie__rating text-md text-right">8.7</div>        
        </div>

        </div>
  )
}

export default MovieDetail