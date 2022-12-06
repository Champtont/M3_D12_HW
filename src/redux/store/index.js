import { configureStore, combineReducers } from "@reduxjs/toolkit";
import companyReducer from "../reducers/companyReducer";
import jobsReducer from "../reducers/jobsReducer";

const mainReducer = combineReducers({
  favorites: companyReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
