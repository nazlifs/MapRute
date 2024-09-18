import { createBrowserRouter } from 'react-router-dom';
import {Home, Acces, About} from '../pages/index.jsx'

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/acces",
      element: <Acces/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
  ]);

  export default Router