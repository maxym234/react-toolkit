import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../constans';

const initialState = { users: [] }

export const fetchEndpoints = createAsyncThunk(
  'data/fetchEndpoints',
  async (params, arg) => {
    const response = await fetch(`${API}${params}`);
    const resultResponse = await response.json();
    return resultResponse;
  }
)

const pathEndpointSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: {
    [fetchEndpoints.fulfilled]: (state, action) => {
      console.log(state, action, 'state');
      state.users = action.payload;
    }
  },
})

export const { addPosts } = pathEndpointSlice.actions
export const userList = (state) => state.pathEndpointSlice.users
export default pathEndpointSlice.reducer