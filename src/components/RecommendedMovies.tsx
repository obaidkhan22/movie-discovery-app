import MovieCard from "./MovieCard";
import useRecommendedMovies from "../hooks/useRecommendedMovies";
import Grid from "../Common/Grid";
interface Props {
  movie_id: string;
}
const RecommendedMovies = ({ movie_id }: Props) => {
  const { data } = useRecommendedMovies(movie_id);
  return (
    <>
      <Grid>
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </>
  );
};

export default RecommendedMovies;
