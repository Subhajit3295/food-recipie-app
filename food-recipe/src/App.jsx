import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/> <Home/> </>
    },
    {
      path: '/Recipes',
      element: <><Navbar/></>
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
