import { configureStore } from '@reduxjs/toolkit'
import agencyReducer from '../features/agency/agencySlice'

export const store = configureStore({
  reducer: {
    agencys: agencyReducer
  },
})