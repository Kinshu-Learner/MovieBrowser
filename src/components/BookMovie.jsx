import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieBookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        phoneNumber: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(formData));
    };

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
    }, []);

    return (
        <div className='flex flex-col md:flex-row mt-10 bg-indigo-300 rounded-lg'>
            <div className="md:w-1/2">

                <div className="text-2xl text-white font-bold p-3 bg-indigo-700 rounded-t-lg md:rounded-none md:rounded-tl-lg">
                    You're booking: <span className='text-4xl text-yellow-300'> {show.name}</span>
                </div>

                <div className="my-6 mx-3">

                    <div className="text-xl font-bold mb-2">Show Details:</div>

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

                <form onSubmit={handleFormSubmit} className='flex flex-col rounded-lg p-3'>
                    <label className='py-2 md:px-6 text-lg font-bold'>
                        Name:
                        <input
                            className='rounded  bg-indigo-200 focus:border-b-2 border-indigo-400 focus:outline-none px-2 py-1 mx-2 text-base font-normal'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label className='py-2 md:px-6 text-lg font-bold'>
                        Email:
                        <input
                            className='rounded  bg-indigo-200 focus:border-b-2 border-indigo-400 focus:outline-none px-2 py-1 mx-2 text-base font-normal '
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label className='py-2 md:px-6 text-lg font-bold'>
                        Age:
                        <input
                            className='rounded  bg-indigo-200 focus:border-b-2 border-indigo-400 focus:outline-none px-2 py-1 mx-2 text-base font-normal right-0'
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label className='py-2 md:px-6 text-lg font-bold'>
                        Phone Number:
                        <input
                            className='rounded  bg-indigo-200 focus:border-b-2 border-indigo-400 focus:outline-none px-2 py-1 mx-2 text-base font-normal '
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit" className='text-xl font-bold bg-yellow-300 hover:bg-yellow-200 duration-200 w-40 rounded ml-6 mt-6 p-2'>Book Movie</button>
                </form>
            </div>

            {show.image && <div className="">
                <div className="p-4 flex mx-auto bg-indigo-800 justify-center items-center rounded-lg md:rounded-none md:rounded-r-lg">
                    <img src={show.image && show.image.original} alt={show.name} className='overflow-hidden max-w-sm' />
                </div>
            </div>}
        </div>
    );
};

export default MovieBookingForm;
