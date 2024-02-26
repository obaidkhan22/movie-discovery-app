import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import MovieDetailPage from "./MovieDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Homepage /> }],
  },
  { path: "/movie/:id", element: <MovieDetailPage /> },
]);

export default router;
