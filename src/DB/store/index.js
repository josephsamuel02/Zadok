// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // You can configure middleware, devTools, and other options here
});

export default store;
