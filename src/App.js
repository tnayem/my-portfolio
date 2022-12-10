import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Routs/Home/Home';
import About from './Routs/About/About';
import Project from './Routs/Project/Project';
import Contact from './Routs/Contact/Contact';

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
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
