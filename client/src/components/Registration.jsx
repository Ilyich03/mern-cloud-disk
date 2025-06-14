import React, {useState} from 'react'
import { registration } from '../actions/user'
import Input from './Input'
import { NavLink } from 'react-router-dom'

const Registration = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registration(userName, email, password);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center bg-gray-100 pb-8">
      <div className='flex flex-col items-center justify-center bg-white p-4 mx-auto max-w-md w-full shadow'>
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl font-bold text-gray-700'>Sign up for free</h2>
            <p className='text-sm text-gray-500 mb-3'>Or <NavLink to='/login' className='underline hover:text-gray-700'>sign into your existing account</NavLink></p>
        </div>
        <form 
        onSubmit={handleSubmit}
        className='px-4 py-2'
        >
          <Input value={userName} setValue={setUserName} label='Username'/>
          <Input value={email} setValue={setEmail} label='Email'/>
          <Input value={password} setValue={setPassword} label='Password'/>
          <button type="submit" className='ml-4 mt-4 px-2 py-2 w-100 bg-green-300 rounded-md'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Registration

