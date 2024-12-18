import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'candidate', // Default role
  });

  // Auto-redirect if already signed in
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'candidate') navigate('/candidate');
    else if (role === 'manager') navigate('/manager');
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert(response.data.message);

      // Store token and role in localStorage
      const { token, role } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirect based on role
      if (role === 'candidate') navigate('/candidate');
      else if (role === 'manager') navigate('/manager');
      
    } catch (error) {
      alert('Signup failed!');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="bg-[#363259] absolute top-[-1rem] z-5 left-[-35rem] h-[11.25rem] w-[10rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#946372]" />
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 text-center bg-zinc-800 p-10 rounded w-[25rem]'>
        <h2 className='text-3xl font-semibold'>Signup</h2>
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          onChange={handleChange} 
          className='block p-3 rounded-lg'
          required 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          onChange={handleChange} 
          className='block p-3 rounded-lg'
          required 
        />
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
        <select name="role" onChange={handleChange} className='text-zinc-500 p-3 rounded-lg'>
          <option value="candidate">Candidate</option>
          <option value="manager">Manager</option>
        </select>
        <button type="submit" className='p-3 bg-green-400 rounded-lg font-bold'>Sign Up</button>
        <a href="/" className='underline'>Already have account?</a>
      </form>
    </div>
  );
}

export default Signup;
