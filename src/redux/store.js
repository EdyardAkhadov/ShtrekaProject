import { configureStore } from "@reduxjs/toolkit";
import { postsReduser } from "./slices/post";


const store = configureStore({
    reducer:{
        posts: postsReduser,
    }
});

export default store;