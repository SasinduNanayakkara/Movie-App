import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi'; //get the base URL
import {APIKey} from '../../common/apis/MovieApiKey'; //get the API key which provied from OMDB

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term) =>{
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie `
            ) //create get request providing our API key,movie name, and type as movie 
           return response.data //add the data
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term) =>{
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=series `
            ) //create get request providing our API key,movie name, and type as movie 
            console.log("abc");
            return response.data //add the data

});

export const fetchAsyncMovieOrShowDetails = createAsyncThunk("movies/fetchAsyncShows", async (id) =>{
    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full `
            ) //create get request providing our API key,movie name, and type as movie 
           return response.data //return the data
});

const initialState = { //set up initial states  
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice({ //create a slice
    name: "movies",
    initialState,
    reducers: { //add reducers
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow: (state) =>{ //clear the movie data
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : () =>{ //movie fetching
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled] : (state, {payload}) =>{ //movie fetched
            console.log("movie fetched successfully");
            return {
                ...state,
                movies: payload, //return the data
            }
        },
        [fetchAsyncShows.fulfilled] : (state, {payload}) =>{ //show fetched
            console.log("shows fetched successfully");
            return {
                ...state,
                shows: payload, //return the data
            }
        },
        [fetchAsyncMovieOrShowDetails.fulfilled] : (state, {payload}) =>{ //fetched searched data
            console.log("fetched show successfully");
            return {
                ...state,
                selectedMovieOrShow: payload,
            }
        },
        [fetchAsyncMovies.rejected] : () =>{//movie reject
            console.log("rejected");
        }
    }
});
//export actions
export const {removeSelectedMovieOrShow} = movieSlice.actions; //clear data
export const getAllMovies = (state) => state.movies.movies; //return all movie details
export const getAllShows = (state) => state.movies.shows;//return all show details
export const getSelectorMovieOrShow = (state) => state.movies.selectedMovieOrShow; //rerun all search data
export default movieSlice.reducer; //return reducers