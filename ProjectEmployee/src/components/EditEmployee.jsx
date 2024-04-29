import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editEmployee } from '../Redux/reduxSlice/employeeSlicer'

const EditEmployee = ({ employee, onClose }) => {
  const dispatch = useDispatch()
  const [editedEmployee, setEditedEmployee] = useState({ ...employee })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editEmployee(editedEmployee))
    onClose()
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Edit Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-lg">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={editedEmployee.firstName}
            onChange={(e) =>
              setEditedEmployee({
                ...editedEmployee,
                firstName: e.target.value,
              })
            }
            className="border px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-lg">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={editedEmployee.lastName}
            onChange={(e) =>
              setEditedEmployee({ ...editedEmployee, lastName: e.target.value })
            }
            className="border px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="age" className="text-lg">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={editedEmployee.age}
            onChange={(e) =>
              setEditedEmployee({ ...editedEmployee, age: e.target.value })
            }
            className="border px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="department" className="text-lg">
            Department:
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={editedEmployee.department}
            onChange={(e) =>
              setEditedEmployee({
                ...editedEmployee,
                department: e.target.value,
              })
            }
            className="border px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditEmployee
