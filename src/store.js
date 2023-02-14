import { configureStore } from '@reduxjs/toolkit'
import pathEndpointSlice from '../src/slice/endpointSlice'

export const store = configureStore({
  reducer: {
    pathEndpointSlice,
  },
})