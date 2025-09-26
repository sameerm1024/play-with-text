import React from 'react'

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
                <button className='bg-blue-500 rounded p-2 text-white cursor-pointer
                 hover:border-black hover:border-2' onClick={toggleDarkMode} type='button'>
                    {props.dark?"Light Mode": "Dark Mode"}
                </button>
                <li className='list-none inline-block mx-3 items-center text-xl'>
                    <a href="/">Home</a>
                </li>
                <li className='list-none inline-block mx-2 text-xl'>
                    <a href="/">About</a>
                </li>
            </div>
        </nav>
    </>
  )
}

export default Navbar