import React, {useEffect} from 'react'
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncMovieOrShowDetails, getSelectorMovieOrShow, removeSelectedMovieOrShow} from "../../features/movies/movieSlice";
import "./MovieDetails.scss"
const MovieDetails = () => {
    const {imdbID} = useParams(); //create parameter
    const dispatch = useDispatch();
    const data = useSelector(getSelectorMovieOrShow); //get data from the slice
    console.log(data);
    useEffect(() =>{
        //fetch movie or tv show according to the movieID
        dispatch(fetchAsyncMovieOrShowDetails(imdbID)); 

        return () =>{
            dispatch(removeSelectedMovieOrShow()) //clear the serched details
        }

    },[dispatch,imdbID]);
    return (
        <div className='movie-section'>
            {Object.keys(data).length === 0 ? //while loading data display loading message
                (<div>...Loading</div>)
            :
            (
                //fetch relevent data
            <>
            
            <div className="section-left">
                <div className="movie-title">{data.Title}</div>
                <div className="movie-rating">
                    <span>
                        IMDb Rating <i class="fas fa-star"></i> : {data.imdbRating}
                    </span>
                    <span>
                        IMDb Votes <i class="fas fa-thumbs-up"></i> : {data.imdbVotes}
                    </span>
                    <span>
                        Runtime <i class="fas fa-film"></i> : {data.Runtime}
                    </span>
                    <span>
                        Year  <i class="fas fa-calendar-alt"></i> : {data.Year}
                    </span>
                </div>
                <div className="movie-plot">{data.Plot}</div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Starts</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{data.Genere}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{data.Language}</span>
                    </div>
                    <div>
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={data.Poster} alt={data.Title} srcset="" />
            </div>
            </>
            )}
        </div>
    );
};



export default MovieDetails
