import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import NewsDetailsLayout from "../layouts/NewsDetailsLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../contexts/PrivateRoute";
import Loading from "../Pages/Loading/Loading";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career ";
import Errorpage from "../Pages/ErrorPage/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <NewsDetailsLayout></NewsDetailsLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: NewsDetails,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/career",
    element: <Career></Career>,
  },
  {
    path: "/*",
    element: <Errorpage />,
  },
]);

export default router;
