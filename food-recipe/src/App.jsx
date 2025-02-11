import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Recipies from './Recipes/Recipies'
import ContactUs from './Contact US/Contact Us'


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
      element: <><Navbar/> <ContactUs/> </>
    },
  ])


  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
