import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice'

export const storage = configureStore({
  reducer: {
    data: dataSlice
  }
})