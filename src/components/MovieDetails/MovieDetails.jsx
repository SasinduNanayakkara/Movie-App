import React, {useEffect} from 'react'
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncMovieOrShowDetails, getSelectorMovieOrShow} from "../../features/movies/movieSlice";
const MovieDetails = () => {
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectorMovieOrShow);
    console.log(data);
    useEffect(() =>{
        dispatch(fetchAsyncMovieOrShowDetails(imdbID))

    },[dispatch]);
    return (
        <div>
            
        </div>
    )
}



export default MovieDetails
