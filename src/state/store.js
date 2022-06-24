import { configureStore, combineReducers } from '@reduxjs/toolkit';

import NewsReducer from './news/news.slice';

const combinedReducer = combineReducers({
  news: NewsReducer,
});

export const store = configureStore({
  reducer: combinedReducer,
});
