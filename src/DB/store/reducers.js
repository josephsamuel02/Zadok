// store/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./Products";
// import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  // Add your slice reducers here
  products: productsSlice,
  // counter: counterReducer,
});

export default rootReducer;
