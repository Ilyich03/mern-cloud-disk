import axios from 'axios'
import { setUser } from '../reducers/userReducer';

export const registration = async(userName, email, password) => {
    try {
    const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
      userName,
      email,
      password
    });
    alert(response.data.message);
    return response.data; 
  } catch (e) {
    console.error('Registration error:', e);
  }
};

export const login = (loginValue, password) => {
  return async dispatch => {  
    try {
      const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(loginValue);
      const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        [isEmail? "email" : "userName"] : loginValue, 
        password
      }); 
      dispatch(setUser(response.data.user))
      localStorage.setItem("token", response.data.token)
    } catch (e) {
      alert(e.response.data.message)
      console.error('Login error:', e);
    }
  }
};

export const auth = () => {
  return async dispatch => {  
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, 
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
      ); 
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      alert(e.response.data.message)
      localStorage.removeItem('token')
    }
  }
};