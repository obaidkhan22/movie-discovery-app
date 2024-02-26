import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MovieDetailPage from "./MovieDetailPage";
import MainContent from "./MainContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainContent /> },
      { path: "/movie/:id", element: <MovieDetailPage /> },
    ],
  },
]);

export default router;
