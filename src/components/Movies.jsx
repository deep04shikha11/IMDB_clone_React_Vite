import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <div>
        <div className='text-2xl font-bold text-center m-5'>
            <h1>Trending Movies</h1>
        </div>
        <div className='flex justify-around flex-wrap gap-7'>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    </div>
  )
}

export default Movies