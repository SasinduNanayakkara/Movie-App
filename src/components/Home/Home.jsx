import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {

    const dispatch = useDispatch(); //create dispatch
    useEffect(() => {
        dispatch(fetchAsyncMovies()); //call the function
        dispatch(fetchAsyncShows());
    },[dispatch]);
    return (
        <div>
            <div className='banner-img'>
                <MovieListing/>
            </div>
        </div>
    )
}

export default Home
