import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { Courses } from "../Pages/courses";
import { Home } from "../Pages/home"
import { Registration } from "../Pages/registration";

export const router = createBrowserRouter([
    {
      path: "/",
      element: [
        <Header/>,
        <Home/>
        ],
    },
    {
      path: "/courses/",
      element: [
        <Header/>,
        <Courses/>
        ],
    },
    {
      path: "/matricular",
      element: [
        <Header isNavigate/>,
        <Registration/>
        ],
    },
  ]);

