import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmployee } from '../Redux/reduxSlice/employeeSlicer'
import EditEmployee from './EditEmployee'
import EmployeeDetailsModal from './EmployeeDetailsModal'

const EmployeeDetails = () => {
  const employees = useSelector((state) => state.employees.employees)
  const dispatch = useDispatch()
  const [editClicked, setEditClicked] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [detailsModalOpen, setDetailsModalOpen] = useState(false)

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee)
    setEditClicked(true)
  }

  const handleCloseEdit = () => {
    setSelectedEmployee(null)
    setEditClicked(false)
  }

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee)
    setDetailsModalOpen(true)
  }

  const handleCloseDetailsModal = () => {
    setSelectedEmployee(null)
    setDetailsModalOpen(false)
  }

  return (
    <div className="flex mt-7 flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">Employee Details</h1>

      <table className="table-auto mt-5 w-full">
        {/* Table header */}
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Salary</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Designation</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Employees data */}
          {employees.map((employee, index) => (
            <tr
              key={employee.id}
              className={`border-b ml-4 border-gray-200 ${
                index % 2 === 0 ? 'bg-slate-500' : 'bg-white'
              } `}
            >
              {/* Employee details */}
              <td className="px-4 py-2">{employee.id}</td>
              <td className="px-4 py-2">{employee.firstName}</td>
              <td className="px-4 py-2">{employee.lastName}</td>
              <td className="px-4 py-2">{employee.age}</td>
              <td className="px-4 py-2">
                $
                {employee.age < 40
                  ? employee.age * 5 + 50.0
                  : employee.age * 10 + 50.0}
              </td>
              <td className="px-4 py-2">{employee.department}</td>
              <td className="px-4 py-2">
                {employee.age >= 40 ? 'Sr.Employee' : 'Jr.Employee'}
              </td>
              {/* Action buttons */}
              <td className="px-4 py-2">
                <button
                  onClick={() => dispatch(deleteEmployee(employee.id))}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditEmployee(employee)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleViewDetails(employee)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render EditEmployee component if editClicked is true */}
      {editClicked && (
        <EditEmployee employee={selectedEmployee} onClose={handleCloseEdit} />
      )}

      {/* Render EmployeeDetailsModal if detailsModalOpen is true */}
      {detailsModalOpen && (
        <EmployeeDetailsModal
          employee={selectedEmployee}
          onClose={handleCloseDetailsModal}
        />
      )}
    </div>
  )
}

export default EmployeeDetails
