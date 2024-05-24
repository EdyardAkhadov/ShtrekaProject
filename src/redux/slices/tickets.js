import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (userId) => {
    const {data} = await axios.get(`/tickets/${userId}`);
    return data;
})

const initialState = {
    tickets:{
        items:[],
        status: 'loading',
    },
}

const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTickets.pending, (state) => {
            state.tickets.items = [];
            state.tickets.status = 'loading';
        }),
        builder.addCase(fetchTickets.fulfilled, (state, action) => {
            state.tickets.items = action.payload;
            state.tickets.status = 'loaded';
        }),                                                                                                                                                                                                                                                              
        builder.addCase(fetchTickets.rejected, (state) => {
            state.tickets.items = [];
            state.tickets.status = 'error';
        })
    }
})

export const ticketsReduser = ticketSlice.reducer;