import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const MovieSummary = () => {
    const params = useParams();
    const { id } = params;

    const [show, setShow] = useState({});

    useEffect(() => {
        const fetchFullshow = async () => {
            const fullShow = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const fullS = await fullShow.json();
            setShow(fullS);
        }
        fetchFullshow();
    });

    return (
        <div className='flex flex-col md:flex-row mt-10 bg-indigo-300 rounded-lg'>
            <div className="">

                <div className="text-2xl text-white font-bold p-3 bg-indigo-700 rounded-t-lg md:rounded-none md:rounded-tl-lg">
                    Summary of <span className='text-4xl text-yellow-300'> {show.name}</span>
                </div>
                <div className="font-semibold text-lg p-3" dangerouslySetInnerHTML={{ __html: show.summary }} />

                <div className="my-6 mx-3">

                    <div className="text-xl font-bold mb-2">Other Details:</div>

                    {show.runtime && <div className="font-semibold">
                        Runtime: <span className='font-bold'> {show.runtime}</span>
                    </div>}

                    {show.rating && <div className="font-semibold">
                        Average Rating: <span className='font-bold'> {show.rating.average}</span>
                    </div>}

                    {show.schedule && <div className="font-semibold">
                        Schedule Time: <span className='font-bold'> {show.schedule.time}</span>
                    </div>}

                    {show.schedule && <div className="font-semibold">
                        Schedule Days: <span className='font-bold'> {show.schedule.days}</span>
                    </div>}

                </div>

                <div className="my-6 mx-3">
                    <Link to={`/book/${id}`} className="p-3 bg-indigo-700 rounded-lg text-xl font-bold text-yellow-300 hover:bg-indigo-500 duration-200">
                        Book a Ticket
                    </Link>
                </div>
            </div>
            {show.image && <div className="">
                <div className="p-4 flex mx-auto bg-indigo-800 justify-center items-center rounded-lg md:rounded-none md:rounded-r-lg">
                    <img src={show.image && show.image.original} alt={show.name} className='overflow-hidden max-w-sm' />
                </div>
            </div>}
        </div>
    )
}

export default MovieSummary
