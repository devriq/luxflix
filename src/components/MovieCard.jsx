import Link from 'next/link';

export default function MovieCard({ movie, status }) {
  let movieStatusId = `movie:${movie.id}`;
  let trailer_search = `${movie.title
    .toLowerCase()
    .split(' ')
    .join('+')}+${movie['release_date']?.substring(0, 4)}+trailer`;
  return (
    <div
      key={movie.id}
      className={`w-full max-w-[240px] h-[350px] z-0 m-3 ${status[movieStatusId]}`}
    >
      <Link
        target="_blank"
        href={`https://www.youtube.com/results?search_query=${trailer_search}`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className={`${
            status[movieStatusId] == 'Yes' ? 'grayscale' : ''
          } h-full w-full object-contain hover:grayscale-0 hover:cursor-pointer`}
        />
      </Link>
      {/* <div className="movie-info">
  <strong>{movie.title}</strong>
</div>   */}
    </div>
  );
}
