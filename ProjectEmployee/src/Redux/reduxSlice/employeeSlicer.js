import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [], // Initialize with an empty array
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const employee = {
        id: state.employees.length + 1,
        ...action.payload,
      }
      state.employees.push(employee)
    },
    editEmployee: (state, action) => {
      const index = state.employees.findIndex(
        (employee) => employee.id === action.payload.id
      )
      state.employees[index] = action.payload
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      )
    },
  },
})

export const { addEmployee, editEmployee, deleteEmployee } =
  employeeSlice.actions
export default employeeSlice.reducer
