import 'boxicons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar fixed top-0 w-[100%] h-[8vh] md:h-[10vh] aspect-auto flex justify-between px-2 items-center backdrop-blur-2xl z-[10000]'>
            <h1 className='font-bold font text-2xl md:text-3xl'>MyKitchen</h1>
            <div className=" sm:flex items-center gap-2 md:gap-3 xl:gap-6 2xl:gap-10 hidden">
                <NavLink to="/" className={(e) => { return e.isActive ? 'underline underline-offset-8' : 'hover:underline hover:underline-offset-8' }}>Home</NavLink>
                <NavLink to="/Recipes" className={(e) => { return e.isActive ? 'underline underline-offset-8' : 'hover:underline hover:underline-offset-8' }}>Recipies</NavLink>
                <NavLink to="/Contact-Us" className={(e) => { return e.isActive ? 'underline underline-offset-8' : 'hover:underline hover:underline-offset-8' }}>Contact US</NavLink>
            </div>
            <div className="md:hidden flex justify-center items-center p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
                <box-icon name='menu'></box-icon>
            </div>
            <div className='input md:flex gap-5 hidden'>
                <input type="text" placeholder='Search Biriyani...' className='focus:outline-1 focus:outline-gray-500 outline-gray-400 outline-1 h-[100%] rounded-2xl p-2'/>
                <button className='hover:cursor-pointer bg-orange-400 hover:bg-orange-500 rounded-md p-2'>Search</button>
            </div>
        </nav>
    )
}

export default Navbar
