import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MovieDetailPage from "./MovieDetailPage";
import MainContent from "./MainContent";
import ActorDetailPage from "../components/ActorDetailPage";
import SearchedMovies from "./SearchedMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainContent /> },
      { path: "/movie/:id", element: <MovieDetailPage /> },
      { path: "/person/:id", element: <ActorDetailPage /> },
    ],
  },
  { path: "/movies/:name", element: <SearchedMovies /> },
]);

export default router;
