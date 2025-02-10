import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Recipies from './Recipes/Recipies'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/> <Home/> </>
    },
    {
      path: '/Recipes',
      element: <><Navbar/> <Recipies/> </>
    },
    {
      path: '/Contact-Us',
      element: <><Navbar/></>
    },
  ])


  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
