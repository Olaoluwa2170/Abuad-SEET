import { NavLink, Outlet } from "react-router-dom"
import Button from "./Button"
import menu from '../assets/icons/menu.svg'
import cancel from '../assets/icons/cancel.svg'
import { useState } from "react"


const RootLayouts = () => {
    let [open, setOpen]=useState(false)
    return (
    <>
        <header className="md:fixed md:w-full top-0 z-50">
            <nav className="w-full items-center md:flex bg-gradient-to-r
              to-primary-light from-blue-500 p-5 md:justify-between shadow-md">
                <div className="ml-5 font-bold text-lg ">
                    <a href="" className="flex ">
                        <img src="../assets/img/Logo.png" className="w-12  mr-3"></img>
                        <h1 className="md:m-auto font-fatface text-[2em] flex items-center text-white ">ABUAD</h1>
                    </a>
                </div>
                <div onClick={()=>setOpen(!open)} className="absolute right-8 top-10 cursor-pointer md:hidden">
                    <img  className="icons" src={open ? cancel : menu} alt=""/>
                </div>
                <ul className={`navList ${open ? "top-20":"top-[-490px]"} `} >
                    <li className="text">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="text">
                        <NavLink to="about">About</NavLink>
                    </li>
                    <li className="text">
                        <NavLink to="about">Contact</NavLink>
                    </li>
                    <li className="text">
                        <NavLink to="about">Service</NavLink>
                    </li>
                    <Button>Read More</Button>
                </ul>
                
                
            </nav>
        </header>
        <main className={`md:mt-0 ${open ? 'mt-[300px]' : 'mt-0'} 
        absolute w-full transition-all duration-500 ease-out `}>
            <Outlet />
        </main>
    </>
    )
}

export default RootLayouts