import React  from 'react'
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Registration from './components/registration/Registration';


export default function App() {
  return (
  <Router>
    <div className='bg-gray-300'>
      <Navbar/>
      <Routes>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
    </div>
  </Router>
)}
