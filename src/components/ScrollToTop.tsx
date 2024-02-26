import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMovieQueryStore from "../hooks/store";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const page = useMovieQueryStore((s) => s.movieQuery.page);

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional if you want to skip the scrolling animation
    });
  }, [pathname, page]);

  return null;
};

export default ScrollToTop;
