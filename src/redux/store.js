import { configureStore } from "@reduxjs/toolkit";
import { postsReduser } from "./slices/post";
import { authReducer } from "./slices/auth";
import {stationsReduser} from "./slices/station"

const store = configureStore({
    reducer:{
        posts: postsReduser,
        auth: authReducer,
        stations: stationsReduser,
    }
});

export default store;