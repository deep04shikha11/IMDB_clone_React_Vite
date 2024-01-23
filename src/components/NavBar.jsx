import React from 'react';
import Logo from '../MovieLogo.png';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='flex space-x-8 item-center pl-3 py-4'>
        <img className='w-[50px]' src={Logo} alt="" />
        <Link to="/" className='text-blue-500 text-3xl font-bold'>Movies</Link>
        <Link to="/watchList" className='text-blue-500 text-3xl font-bold'>Watch List</Link>
    </div>
  )
}

export default Navbar