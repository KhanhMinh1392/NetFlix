import React from "react";

const routes = [
  {
    path: "/",
    element: React.lazy(() => import("../../pages/Home/HomeService")),
    exact: true,
  },
  {
    path: "/movies",
    element: React.lazy(() => import("../../pages/Movies/MovieService")),
    exact: true,
  },
  {
    path: "/movie/:id",
    element: React.lazy(() => import("../../pages/MovieDetail/MovieDetailService")),
    exact: false,
  },
];

export default routes;