import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Routs/Home/Home';
import About from './Routs/About/About';
import Project from './Routs/Project/Project';
import Contact from './Routs/Contact/Contact';
import HelloDotCom from './Components/MyProject/HelloDotCom/HelloDotCom';
import DentalSurgeon from './Components/MyProject/DentalSurgeon/DentalSurgeon';
import DreamIt from './Components/MyProject/DreamIt/DreamIt';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/project',
          element:<Project></Project>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/helloDotCom',
          element:<HelloDotCom></HelloDotCom>
        },
        {
          path:'/DentalSurgeon',
          element:<DentalSurgeon></DentalSurgeon>
        },
        {
          path:'/dreamIt',
          element:<DreamIt></DreamIt>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
