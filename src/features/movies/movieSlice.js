import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi'; //get the base URL
import {APIKey} from '../../common/apis/MovieApiKey'; //get the API key which provied from OMDB

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () =>{
    const movieText = "DeadPool";
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie `
            ) //create get request providing our API key,movie name, and type as movie 
           return response.data //add the data
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async () =>{
    const seriesText = "Loki"
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series `
            ) //create get request providing our API key,movie name, and type as movie 
           return response.data //add the data
});

export const fetchAsyncMovieOrShowDetails = createAsyncThunk("movies/fetchAsyncShows", async (id) =>{
    const seriesText = "Loki"
    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full `
            ) //create get request providing our API key,movie name, and type as movie 
           return response.data //return the data
});

const initialState = {
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
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : () =>{
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled] : (state, {payload}) =>{
            console.log("fetched successfully");
            return {
                ...state,
                movies: payload,
            }
        },
        [fetchAsyncShows.fulfilled] : (state, {payload}) =>{
            console.log("fetched successfully");
            return {
                ...state,
                shows: payload,
            }
        },
        [fetchAsyncMovieOrShowDetails.fulfilled] : (state, {payload}) =>{
            console.log("fetched successfully");
            return {
                ...state,
                selectedMovieOrShow: payload,
            }
        },
        [fetchAsyncMovies.rejected] : () =>{
            console.log("rejected");
        }
    }
});
//export
export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectorMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;