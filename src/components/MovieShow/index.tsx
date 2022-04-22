import Movie from '../../Movie';

export default function MovieShow(props: {movie: Movie; status:any[]}): JSX.Element {


  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt="poster" />
        <h6>{props.movie.original_title} ({props.movie.release_date.substring(0, 4)})</h6>
        <p>{props.movie.overview}</p>
      </div>
  
  );
}