import React from 'react'
import { Link } from 'react-router-dom';

const MainMovieCard = (props) => {

  const { movie } = props
  const id = movie.show.id;

  return (
    <div className='bg-indigo-300 my-5 rounded-lg flex flex-col md:flex-row'>

      <div className="w-full rounded-l-lg">

        <div className="h-20 flex justify-center items-center text-3xl font-bold bg-indigo-600 md:rounded-none text-white rounded-t-lg md:rounded-tl-lg">
          {movie.show.name}
        </div>

        <div className="p-4 space-y-2">
          <div className="font-semibold">
            Type: <span className='font-bold'> {movie.show.type}</span>
          </div>
          <div className="font-semibold">
            Language:
            <span className='font-bold'> {movie.show.language}</span>
          </div>
          <div className="font-semibold">
            Genres: {movie.show.genres.map((genre) => (
              <div className="font-bold">
                {genre}
              </div>
            ))}
          </div>
          {movie.show.runtime && <div className="font-semibold">
            Runtime: <span className='font-bold'> {movie.show.runtime}</span>
          </div>}
          {movie.show.rating.average && <div className="font-semibold">
            Average Rating: <span className='font-bold'> {movie.show.rating.average}</span>
          </div>}
        </div>

        <div className="flex justify-center items-center font-bold text-xl m-6">
          <Link to={`/summary/${id}`} target="_blank" className='px-8 py-2 text-white bg-indigo-900 rounded-lg hover:bg-indigo-600 duration-200'>More Details</Link>
        </div>

      </div>

      {movie.show.image && <div className="p-4 flex mx-auto bg-indigo-800 justify-center items-center rounded-lg md:rounded-none md:rounded-r-lg">
        <img src={movie.show.image && movie.show.image.medium} alt={movie.show.name} />
      </div>}

    </div>
  )
}

export default MainMovieCard;
