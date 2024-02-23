import useMovieQueryStore from "../hooks/store";

const getEndPoint = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  if (movieQuery.genreId)
    return `/discover/movie?with_genres=${movieQuery.genreId}&page=${movieQuery.page}`;
  return `/discover/movie?page=${movieQuery.page}`;
};

export default getEndPoint;
