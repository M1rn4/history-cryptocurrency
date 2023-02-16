import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './HomeReducer';
import DetailReducer from './DetailReducer';

const store = configureStore({
  reducer: {
    homes: HomeReducer,
    details: DetailReducer,
  },
});

export default store;
