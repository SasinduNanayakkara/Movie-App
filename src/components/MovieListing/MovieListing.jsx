import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import Slider from "react-slick";
import {settings} from "../../common/setting";
import "./MovieListing.scss" 
const MovieListing = () => {
    
    const movies = useSelector(getAllMovies); //get all movie data
    const shows = useSelector(getAllShows);// get all show data
    let renderMovies = "";
    let renderShows = "";

    //map the movie data
    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) =>(
            <MovieCard key={index} data={movie} />
        ))
    ) : (

        <div className='movies-error'> 
            <h3>{movies.Error}</h3>
        </div>
    );
    //map the show data
    renderShows = shows.Response === "True" ? (
        shows.Search.map((movie, index) =>(
            <MovieCard key={index} data={movie} />
            
        ))
    ) : (
        <div className='shows-error'>
            <h3>{shows.Error}</h3>
        </div>
    );


    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...settings}>{renderMovies}</Slider> {/*render date carouselly */}
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    <Slider {...settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing
