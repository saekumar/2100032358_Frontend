import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import EmployeeDetails from './components/EmployeeDetails'
import AddEmployee from './components/AddEmployee'
import { Provider } from 'react-redux'
import { store } from './Redux/store/store.js'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empdetails" element={<EmployeeDetails />} />
          <Route path="/addemp" element={<AddEmployee />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
