import React from 'react'
import MovieBanner from '../MovieBanner.jpg'
function Banner() {
  return (
    
        <div className='h-[20-vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage:'url('+MovieBanner+')'}}>
            <div className='text-white w-full text-center text-2xl'>Movie Name</div>
        </div>
    
  )
}

export default Banner