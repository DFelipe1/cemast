import { createBrowserRouter } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Courses } from "../Pages/courses";
import { Home } from "../Pages/home"
import { Registration } from "../Pages/registration";
import { Default } from "../layouts/Default";

import { data } from '../service/data'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Default />,
      children: [
        {
          path: '/',
          element: <Home data={data}/>,
        },
        {
          path: '/curso/:slug',
          element: <Courses/>,
          children: [
            <Footer links={data.links}/>
          ]
        },
        {
          path: '/matricular',
          element: <Registration/>,
        }
      ]
    },
  ]);

