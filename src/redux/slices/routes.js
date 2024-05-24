import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchRoutes = createAsyncThunk('routes/fetchRoutes', async (routeData) => {
    const {data} = await axios.get(`/routes/${routeData.fromStation}/${routeData.toStation}/${routeData.date}`);
    return data;
})

const initialState = {
    routes:{
        items:[],
        status: 'loading',
    },
}

const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchRoutes.pending, (state) => {
            state.routes.items = [];
            state.routes.status = 'loading';
        }),
        builder.addCase(fetchRoutes.fulfilled, (state, action) => {
            state.routes.items = action.payload;
            state.routes.status = 'loaded';
        }),                                                                                                                                                                                                                                                              
        builder.addCase(fetchRoutes.rejected, (state) => {
            state.routes.items = [];
            state.routes.status = 'error';
        })
    }
})

export const routesReduser = routesSlice.reducer;