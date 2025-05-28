import axios from 'axios'

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