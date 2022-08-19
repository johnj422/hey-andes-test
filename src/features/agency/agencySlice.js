import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allAgencys: [],
}

export const agencySlice = createSlice({
  name: 'agencys',
  initialState,
  reducers: {
    data: (state) => {
      state.allAgencys = ['test']
    },
  },
})

// Action creators are generated for each case reducer function
export const { data } = agencySlice.actions

export default agencySlice.reducer