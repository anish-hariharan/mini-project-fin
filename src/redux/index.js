import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers/RootReducers";

const store = configureStore({ reducer: rootReducers });

export default store;
