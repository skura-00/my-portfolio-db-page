//Redux: https://redux.js.org/tutorials/fundamentals/part-6-async-logic
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// insert action
export const insert = createAsyncThunk('data/insert/', async({address, firstName, lastName, dob, email}) => {
  try {
    const res = await axios.post('https://db-page-practice-0f7c8e4a291d.herokuapp.com/insert/', 
    {
      address: address, 
      firstName: firstName, 
      lastName: lastName, 
      dateOfBirth: dob, 
      email: email
    })
    return res.data
  } catch (err) {
    console.log(err)
  }
})


export const select = createAsyncThunk('data/select/', async() => {
  try {
    const res = await axios.get('https://db-page-practice-0f7c8e4a291d.herokuapp.com/select/')
    return res.data
  } catch (err) {
    console.log(err)
  }
})

const initialState = {
  address: '',
  firstName: '', 
  lastName: '', 
  dob: '', 
  email: '',
  error: null,
  members: []
}

const dataSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    insert(state, action) {
      state.address = action.payload.address
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.dob = action.payload.dob
      state.email = action.payload.email
      state.error = null
    }
  },
  extraReducers(builder) {
    builder
    .addCase(select.fulfilled, (state, action) => {
      state.members = state.members.concat(action.payload)
    })
    .addCase(select.rejected, (state, action) => {
      console.log(state.error)
    })
  },
})

export const allMembers = (state) => state.members


export default dataSlice.reducer