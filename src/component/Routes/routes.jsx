import React from "react";

const routes = [
  {
    path: "/NetFlix/",
    element: React.lazy(() => import("../../pages/Home/HomeService")),
    exact: true,
  },
  {
    path: "/NetFlix/movies",
    element: React.lazy(() => import("../../pages/Movies/MovieService")),
    exact: true,
  },
  {
    path: "/NetFlix/movie/:id",
    element: React.lazy(() => import("../../pages/MovieDetail/MovieDetailService")),
    exact: false,
  },
];

export default routes;