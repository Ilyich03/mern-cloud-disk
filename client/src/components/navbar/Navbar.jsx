import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MERN disk</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <NavLink to="/login" className="text-gray-600 hover:text-blue-500">Login</NavLink>
          <NavLink to="/registration" className="text-gray-600 hover:text-blue-500">Register</NavLink>
        </div>
      </div>
    </nav> 
  )
}

export default Navbar
