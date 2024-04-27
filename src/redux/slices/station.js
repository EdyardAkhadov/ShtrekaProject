import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchStations = createAsyncThunk('stations/fetchStations', async () => {
    const {data} = await axios.get('/stations');
    return data;
})

const initialState = {
    stations:{
        items:[],
        status: 'loading',
    },
}

const stationSlice = createSlice({
    name: 'stations',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchStations.pending, (state) => {
            state.stations.items = [];
            state.stations.status = 'loading';
        }),
        builder.addCase(fetchStations.fulfilled, (state, action) => {
            state.stations.items = action.payload;
            state.stations.status = 'loaded';
        }),                                                                                                                                                                                                                                                              
        builder.addCase(fetchStations.rejected, (state) => {
            state.stations.items = [];
            state.stations.status = 'error';
        })
    }
})

export const stationsReduser = stationSlice.reducer;