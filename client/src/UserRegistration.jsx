import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const URL="http://localhost:5000/api/signup/register";

  const Signup = async () => {
    let item = { username, email, password };
    try {
      let response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json'
        }
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Registration successfull")
        navigate("/userlogin")
        // setMessage(result.message); // Success message
      } else {
        toast.error(result.message || "Registration failed"); // Toastify error message

        // setMessage(result.message); // Error message from the API
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      // setMessage('Error registering user');
      console.error('Error:', error);
    }
  };

  return (
    <div className='registrationtopcontainter'> 
    <div className="registration-container"> 
      <h1 className="registration-title">User Register</h1>
      <input 
        className="input-field" 
        required 
        onChange={(e) => setUserName(e.target.value)} 
        value={username} 
        type='text' 
        placeholder='User Name' 
      /> 
      <br />
      <input 
        className="input-field" 
        required 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        type='email' 
        placeholder='Email' 
      /> 
      <br /> 
      <input 
        className="input-field" 
        required 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        type='password' 
        placeholder='Password' 
      /> 
      <br /> 
      <button className="submit-button" onClick={Signup}>Sign Up</button>
      
     
      {/* {message && <p className="message">{message}</p>} */}

    </div>
    </div>
  );
};

export default UserRegistration;
