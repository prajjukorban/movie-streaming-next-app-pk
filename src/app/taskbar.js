import React from 'react'

const Taskbar = () => {
  return (
    <nav className='text-white h-10 flex justify-around items-center bg-indigo-800'>
        <img className='h-4' src='CineWave.png'/>
        <ul className='flex gap-3' >
            <li className='cursor-pointer navitem' >Home</li>
            <li className='cursor-pointer navitem' >Series</li>
            <li className='cursor-pointer navitem' >Movies</li>
            <input placeholder='Search' id='search' ></input>
        </ul>
    </nav>
  )
}

export default Taskbar
