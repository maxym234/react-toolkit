import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../constans';

const initialState = { users: [], albums: [] }

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (params, arg) => {
    const response = await fetch(`${API}${params}`);
    const resultResponse = await response.json();
    return resultResponse;
  }
)

export const fetchAlbums = createAsyncThunk(
  'data/fetchAlbums',
  async (params, arg) => {
    const response = await fetch(`${API}${params}`);
    const resultResponse = await response.json();
    return resultResponse;
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [fetchAlbums.fulfilled]: (state, action) => {
      state.albums = action.payload;
    }
  },
})

export const { addPosts } = dataSlice.actions
export const userList = (state) => state.dataSlice.users
export const albumsList = (state) => state.dataSlice.albums
export default dataSlice.reducer