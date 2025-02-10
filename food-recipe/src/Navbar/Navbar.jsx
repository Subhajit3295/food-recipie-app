import "boxicons";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
const Navbar = () => {
    const menuRef = useRef(null);
    const toggleMenu = () => {
        menuRef.current.classList.toggle("hidden");
    };
    return (
        <>

            <nav className="Navbar fixed top-0 w-[100%] h-[8vh] md:h-[10vh] aspect-auto flex justify-between px-5 items-center backdrop-blur-2xl z-[10000]">

                <h1 className="font-bold text-2xl md:text-3xl">MyKitchen</h1>
                <div className="sm:flex items-center gap-2 md:gap-3 xl:gap-6 2xl:gap-10 hidden">

                    <NavLink
                        to="/"
                        className={(e) => {
                            return e.isActive
                                ? "underline underline-offset-8"
                                : "hover:underline hover:underline-offset-8";
                        }}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/Recipes"
                        className={(e) => {
                            return e.isActive
                                ? "underline underline-offset-8"
                                : "hover:underline hover:underline-offset-8";
                        }}>
                        Recipes
                    </NavLink>
                    <NavLink
                        to="/Contact-Us"
                        className={(e) => {
                            return e.isActive
                                ? "underline underline-offset-8"
                                : "hover:underline hover:underline-offset-8";
                        }}>
                        Contact Us
                    </NavLink>
                </div>
                <div className="md:hidden flex justify-center items-center p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">

                    <box-icon name="menu" onClick={toggleMenu}></box-icon>
                </div>
                <div className="signin hidden md:flex gap-5">

                    <button className="px-2 py-1.5 hover:cursor-pointer rounded-md border-1 hover:bg-orange-400 hover:text-white">
                        Login
                    </button>
                    <button className="px-2 py-1.5 hover:cursor-pointer rounded-md bg-orange-400 hover:bg-transparent text-white hover:text-black border-1 border-transparent hover:border-black">
                        SignUp
                    </button>
                </div>
                <div
                    ref={menuRef} className="absolute p-5 z-[100001] top-0 bottom-0 right-0 bg-white h-screen w-[100%] hidden" id="menu">

                    <button
                        className="absolute top-5 right-5 p-2 bg-orange-400 flex justify-center items-center hover:bg-orange-500 rounded-2xl text-white"
                        onClick={toggleMenu}>

                        <span className="material-symbols-outlined">close</span>
                    </button>
                    <div className="w-[100%] h-[100%] flex flex-col justify-start pt-30 items-center gap-5 text-2xl ">

                        <Link
                            onClick={toggleMenu}
                            to="/"
                            className="border-1 p-3 w-[60%] text-center rounded-xl hover:border-transparent hover:bg-orange-400 hover:text-white">
                            Home
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            to="/Recipes"
                            className="border-1 p-3 w-[60%] text-center rounded-xl hover:border-transparent hover:bg-orange-400 hover:text-white">
                            Recipes
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            to="/Contact-Us"
                            className="border-1 p-3 w-[60%] text-center rounded-xl hover:border-transparent hover:bg-orange-400 hover:text-white">
                            Contact Us
                        </Link>
                        <Link
                            onClick={toggleMenu}
                            className="p-3 w-[60%] text-center rounded-xl bg-orange-400 text-white hover:bg-orange-500 hover:text-black">
                            Sign in
                        </Link>
                    </div>
                </div>
            </nav>

        </>
    );
};
export default Navbar;
