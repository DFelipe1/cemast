import {
  RouterProvider,
} from "react-router-dom";

import {router} from './routes'

import { Client, Provider, cacheExchange, fetchExchange } from 'urql';


import './styles/global.css'

const client = new Client({
  url: import.meta.env.VITE_CMS_KEY,
  exchanges: [cacheExchange, fetchExchange],
});


function App() {

  return (
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
