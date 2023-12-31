import { combineReducers } from "redux";
import userReducer from "./UserReducers";

const rootReducers = combineReducers({ store: userReducer });

export default rootReducers;
