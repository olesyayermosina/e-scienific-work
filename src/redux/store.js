import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import {mergingSlice} from "./slices/mergingSlice.js";

const store = configureStore({
    reducer: {
        merging: mergingSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;