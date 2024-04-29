import React, { useState } from 'react'
import { addEmployee } from '../Redux/reduxSlice/employeeSlicer'
import { useDispatch } from 'react-redux'

const AddEmployee = () => {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [age, setAge] = useState('')
  const [department, setDepartment] = useState('')
  const [salary, setSalary] = useState('')
  const [lastName, setLastName] = useState('')
  const [clicked, setClicked] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    // Convert the first character of first name and last name to uppercase
    const formattedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1)
    const formattedLastName =
      lastName.charAt(0).toUpperCase() + lastName.slice(1)

    console.log(formattedFirstName, formattedLastName, age, department, salary)

    dispatch(
      addEmployee({
        firstName: formattedFirstName,
        lastName: formattedLastName,
        age: age,
        department: department,
        salary: salary,
      })
    )

    setFirstName('')
    setLastName('')
    setAge('')
    setDepartment('')
    setSalary('')
  }

  return (
    <div className="flex mt-7 flex-col items-center justify-center ">
      <h1 className="text-center text-3xl font-semibold"></h1>
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-lg">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            className="border p-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-lg">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            className="border p-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="age" className="text-lg">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
            className="border p-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="designation" className="text-lg">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter department"
            className="border p-2"
          />
        </div>

        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          type="submit"
          onClick={(e) => {
            handleFormSubmit(e)
          }}
        >
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default AddEmployee
