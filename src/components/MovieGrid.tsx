import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovies();
  return (
    <div>
      <ul>
        {data?.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieGrid;
