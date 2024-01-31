import React from 'react'
import { useParams } from 'react-router-dom'

const MovieSummary = () => {
    const params = useParams();
    const { name } = params;
    return (
        <div className=''>
            Summary of {name}
        </div>
    )
}

export default MovieSummary
