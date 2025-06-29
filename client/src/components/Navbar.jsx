import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../reducers/userReducer'


const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MERN disk</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {!isAuth && <NavLink to="/login" className="text-gray-600 hover:text-blue-500">Login</NavLink>}
          {!isAuth && <NavLink to="/registration" className="text-gray-600 hover:text-blue-500">Register</NavLink>}
          {isAuth && <div onClick={()=>dispatch(logOut())} className="text-gray-600 hover:text-blue-500" >Logout</div>}
        </div>
      </div>
    </nav> 
  )
}

export default Navbar
