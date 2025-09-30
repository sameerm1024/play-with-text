import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {

    const toggleDarkMode = () =>{
        props.toggleDark(!props.dark)
    }
  return (
    <>
        <nav className={`flex justify-between items-center w-full p-4 
            ${props.dark?"bg-gray-900 text-white":"bg-gray-200 text-black"}`}>
            <div className='font-extrabold inline-block text-3xl'>{props.name}</div>
            <div>          
                <button className={`rounded p-2 cursor-pointer hover:border-2 ${props.dark?
                "bg-white text-black hover:border-black" : "bg-black text-white hover:border-white"}`} onClick={toggleDarkMode} type='button'>
                {props.dark?"Light Mode": "Dark Mode"}
                </button>
                <li className='list-none inline-block mx-3 items-center text-xl'>
                    <Link to="/">Home</Link>
                </li>
                <li className='list-none inline-block mx-2 text-xl'>
                    <Link to="/">About</Link>
                </li>
            </div>
        </nav>
    </>
  )
}

export default Navbar