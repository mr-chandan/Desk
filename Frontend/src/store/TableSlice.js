import { createSlice } from '@reduxjs/toolkit'

export const TableSlice = createSlice({
  name: 'TableSlice',
  initialState: {
    olddata: null,
    stepone:null
  },
  reducers: {
    setolddata: (state,action) => {
      state.olddata = action.payload
    },
    setstepone: (state,action) => {
      state.stepone = action.payload
    },
  },
})

export const {setolddata,setstepone} = TableSlice.actions

export default TableSlice.reducer