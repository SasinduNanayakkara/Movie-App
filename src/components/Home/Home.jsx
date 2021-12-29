import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {

    const dispatch = useDispatch(); //create dispatch
    const movieText = "X-men"; // set default values
    const showText = "Loki";
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText)); //fetch the default movies list
        dispatch(fetchAsyncShows(showText));// fetch the default tv shows
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
