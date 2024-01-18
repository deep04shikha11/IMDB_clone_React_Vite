import React from 'react'
import Logo from '../MovieLogo.png'
function Navbar() {
  return (
    <div className='flex space-x-8 item-center pl-3 py-4'>
        <img className='w-[50px]' src={Logo} alt="" />
        <a href="/" className='text-blue-500 text-3xl font-bold'>Movies</a>
        <a href="/watchList" className='text-blue-500 text-3xl font-bold'>Watch List</a>
    </div>
  )
}

export default Navbar