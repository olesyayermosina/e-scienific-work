import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";

const store = configureStore({
    reducer: {

    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;