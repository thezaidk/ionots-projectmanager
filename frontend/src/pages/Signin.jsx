import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Check if user is already signed in
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'candidate') navigate('/candidate');
    else if (role === 'manager') navigate('/manager');
  }, [navigate]);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', credentials);
      const { token, role } = response.data;

      // Save token and role to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirect based on role
      if (role === 'candidate') navigate('/candidate');
      else if (role === 'manager') navigate('/manager');
    } catch (error) {
      alert('Signin failed!');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="bg-[#363259] absolute top-[-1rem] z-5 left-[-35rem] h-[11.25rem] w-[10rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10 text-center bg-zinc-800 p-10 rounded w-[25rem]'>
          <h2 className='text-3xl font-semibold'>Signin</h2>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={handleChange} 
            className='block p-3 rounded-lg'
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={handleChange} 
            className='block p-3 rounded-lg text-black'
            required 
          />
          <button type="submit" className='p-3 bg-blue-400 rounded-lg font-bold'>Sign In</button>
          <a href="/signup" className='underline'>Create an account</a>
        </form>
      </div>
  );
}

export default Signin;
