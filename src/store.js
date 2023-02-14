import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../src/slice/endpointSlice'

export const store = configureStore({
  reducer: {
    dataSlice,
  },
})