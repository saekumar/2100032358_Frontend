import React from 'react'

const EmployeeDetailsModal = ({ employee, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
        <div className="flex flex-col">
          <label className="mb-2">
            <strong>ID:</strong> {employee.id}
          </label>
          <label className="mb-2">
            <strong>First Name:</strong> {employee.firstName}
          </label>
          <label className="mb-2">
            <strong>Last Name:</strong> {employee.lastName}
          </label>
          <label className="mb-2">
            <strong>Age:</strong> {employee.age}
          </label>
          <label className="mb-2">
            <strong>Salary:</strong> ${employee.salary}
          </label>
          <label className="mb-2">
            <strong>Department:</strong> {employee.department}
          </label>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetailsModal
