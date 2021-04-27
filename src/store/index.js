import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  postsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});
