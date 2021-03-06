import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import "./Header.scss";

const Header = () => {

    const [term, setTerm] = useState(""); //term state
    const dispatch = useDispatch(); //create dispatch
    const submitHandler = (e) =>{
        e.preventDefault();
        //when start search without enter anything display an altert message
        if(term === "") return alert("Please enter a search term")
        dispatch(fetchAsyncMovies(term)); // fetch the movies
        dispatch(fetchAsyncShows(term)); //fetch the tv shows
        setTerm(""); // clear the search bar
    }
    return (
        <div className='header'>
            
            <div className='logo'>
                <Link to="/">
                    Movie App
                </Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}> 
                    <input type="text" placeholder='Search movie or Shows' onChange={(e) => setTerm(e.target.value)} />
                    <button type='submit'><i class="fas fa-search"></i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src="data:image/png;base64,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"  alt="user" />
            </div>
        </div>
    )
}

export default Header
