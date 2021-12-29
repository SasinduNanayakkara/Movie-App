import {configureStore} from "@reduxjs/toolkit"
import moviesReducer from "./movies/movieSlice"
    export const store = configureStore({ //configure tge store as reducer
        reducer: {
            movies: moviesReducer
        },
    })