import React, {useState} from 'react'
import Input from './Input'
import { NavLink } from 'react-router-dom'
import {login} from '../actions/user'
import {useDispatch} from "react-redux"

const Login = () => {

  const [loginValue, setLoginValue] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  
const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(login(loginValue, password)); 
};
  return (
    <div className="min-h-screen flex items-center bg-gray-100 pb-8">
      <div className='flex flex-col items-center justify-center bg-white p-4 mx-auto max-w-md w-full shadow'>
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl font-bold text-gray-700'>Sign in to your account</h2>
            <p className='text-sm text-gray-500 mb-3'>Or <NavLink to='/registration' className='underline hover:text-gray-700'>sign up for a new account</NavLink></p>
        </div>
        <form onSubmit={handleSubmit} className='px-4 py-2'>
          <Input value={loginValue} setValue={setLoginValue} label='Email/Username'/>
          <Input value={password} setValue={setPassword} label='Password'/>
          <button type="submit" className='ml-4 mt-4 px-2 py-2 w-100 bg-green-300 rounded-md'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login