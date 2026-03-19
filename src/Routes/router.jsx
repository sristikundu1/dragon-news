import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      // {
      //   path: "",
      //   Component: Home,
      // },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <div>auth</div>,
  },
  {
    path: "/news",
    element: <div>news layout</div>,
  },
  {
    path: "/*",
    element: <div>Error 404</div>,
  },
]);

export default router;
