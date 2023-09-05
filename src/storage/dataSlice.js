//Redux: https://redux.js.org/tutorials/fundamentals/part-6-async-logic
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// insert action
export const insert = createAsyncThunk('data/insert/', async({address, firstName, lastName, dob, email}) => {
  try {
    const res = await axios.post('/insert', 
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
    const res = await axios.get('/select')
    return res.data
  } catch (err) {
    console.log(err)
  }
})


export const selectClub = createAsyncThunk('data/selectClub/', async() => {
  try {
    const res = await axios.get('/selectClub')
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
  members: [],
  projects: []
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
      console.log(action.payload)
      state.members = state.members.concat(action.payload)
    })
    .addCase(select.rejected, (state, action) => {
      console.log(state.error)
    })
    .addCase(selectClub.fulfilled, (state, action) => {
      state.projects = state.projects.concat(action.payload)
    })
  },
})


export default dataSlice.reducer