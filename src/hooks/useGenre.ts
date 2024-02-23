import genres from "../data/genres";
const useGenre = (id?: number) => {
  return genres.find((g) => g.id === id);
};

export default useGenre;
