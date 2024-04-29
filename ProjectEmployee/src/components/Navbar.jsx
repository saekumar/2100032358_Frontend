import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className=" flex items-center mt-4 justify-center bg-white shadow-lg">
        <ul
          id="nav-mobile"
          className="flex items-center justify-between mt-4 pb-4 space-x-14  w-full md:w-auto"
        >
          <li>
            <a href="/" className="text-blue-500">
              <button>Home</button>
            </a>
          </li>
          <li>
            <a href="/empdetails">
              <button className="hover:bg-blue-700 hover:text-orange-50 bg-blue-500 rounded-md px-1 py-2 text-center text-white ">
                Employee Details
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
