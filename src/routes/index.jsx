import { createBrowserRouter } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Courses } from "../Pages/courses";
import { Home } from "../Pages/home"
import { Registration } from "../Pages/registration";

import { data } from '../service/data'

export const router = createBrowserRouter([
    {
      path: "/",
      element: [
        <Header/>,
        <Home data={data}/>,
        <Footer links={data.links}/>
        ],
    },
    {
      path: "/courses/",
      element: [
        <Header/>,
        <Courses/>,
        <Footer links={data.links}/>
        ],
    },
    {
      path: "/matricular",
      element: [
        <Header isNavigate/>,
        <Registration/>,
        <Footer links={data.links}/>
        ],
    },
  ]);

