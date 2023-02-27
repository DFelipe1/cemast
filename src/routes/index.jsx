import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../Pages/home"

export const router = createBrowserRouter([
    {
      path: "/",
      element: [
        <Header/>,
        <Home/>
        ],
    },
  ]);

