import React from 'react'
import backlogo from '../MovieBanner.jpg';
function MovieCard() {
  return (
    <div className='h-[40vh] w-[200px] bg-cover flex items-end rounded-lg hover:scale-110 duration-300' style={{backgroundImage:`url(${backlogo})`}}>
        <div className='text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded'>Movie Name</div>
    </div>
  )
}

export default MovieCard