import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import {stationsReduser} from "./slices/station";
import {ticketsReduser} from "./slices/tickets"
import { routesReduser } from "./slices/routes";

const store = configureStore({
    reducer:{
        auth: authReducer,
        stations: stationsReduser,
        tickets: ticketsReduser,
        routes: routesReduser,
    }
});

export default store;