import React from 'react'

const Navbar = (props) => {
  return (
    <>
        <nav className="flex justify-between items-center bg-gray-800 p-4 text-white w-full">
            <div className='font-extrabold inline-block text-3xl'>{props.name}</div>
            <div>
                <li className='list-none inline-block mx-2'>
                    <a href="/">Home</a>
                </li>
                <li className='list-none inline-block mx-2'>
                    <a href="/">About</a>
                </li>
            </div>
        </nav>
    </>
  )
}

export default Navbar