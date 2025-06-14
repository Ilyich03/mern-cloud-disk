import React, {useEffect}  from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Registration from './components/Registration';
import Login from './components/Login';
import {useDispatch, useSelector} from 'react-redux'
import {auth} from './actions/user'



export default function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
  <Router>
    <div className='bg-gray-300'>
      <Navbar/>
      {!isAuth && 
        <Routes>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      }
      
    </div>
  </Router>
)}
