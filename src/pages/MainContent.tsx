import FeatureMovie from "../components/FeatureMovie/FeatureMovie";
import MovieGrid from "../components/MovieGrid";
import MovieHeading from "../components/MovieHeading";
import useMovies from "../hooks/useMovies";

const MainContent = () => {
  const { data } = useMovies();
  const movie = data?.results[0];
  return (
    <>
      {movie && <FeatureMovie movie={movie} />}
      <MovieHeading />
      <MovieGrid />
    </>
  );
};

export default MainContent;
