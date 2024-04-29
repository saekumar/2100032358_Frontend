import { configureStore } from '@reduxjs/toolkit'
// Import the correct reducer
import employeeReducer from '../reduxSlice/employeeSlicer'
export const store = configureStore({
  reducer: {
    employees: employeeReducer, // Use the correct reducer name
  },
})
