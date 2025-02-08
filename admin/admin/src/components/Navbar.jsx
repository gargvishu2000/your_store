import React from 'react'
import {assets} from "../assets/assets"

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between'>
      <img className='w-[max(10%,80px)] ml-20' src={assets.logo}></img>
      <button onClick={()=> setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm mr-20'>Logout</button>
    </div>
  )
}

export default Navbar
