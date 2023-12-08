import { configureStore } from '@reduxjs/toolkit';
import kakaoReducer from './kakaomap/kakaoSlice';

const store = configureStore({
  reducer: {
    kakaoReducer
  }
});

export default store;
