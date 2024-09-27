import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import { toast } from 'react-toastify';

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState(""); 
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from context
const URL="http://localhost:5000/api/login/login"
  const handleLogin = async () => {
    const item = { email, password };

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

      const result = await response.json();

      if (response.ok) {
       
        login({ username: result.user.username, token: result.user.token });  // Use the login function from context
        toast.success("Login successfull")
        navigate("/");
      } else {
       
        toast.error(result.message || "Login failed"); // Toastify error message
        // setMessage(result.message); // Error message from the API
      }
    } catch (error) {
      toast.error("An error occurred. Please try again."); // Toastify error message
      // setMessage("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className='registrationtopcontainter'> 
    <div className="registration-container">
      <h1 className="registration-title">Login Page</h1>
      <input 
      className="input-field"
        required 
        onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        placeholder="Enter Email" 
        value={email} 
      />
      <br />
      <input 
      className="input-field"
        required 
        onChange={(e) => setPassword(e.target.value)} 
        type="password" 
        placeholder="Enter Password" 
        value={password} 
      />
      <br />
      <button className="submit-button"  onClick={handleLogin}>Login</button>
      
      {/* {message && <p className="message">{message}</p>} */}
    </div>

    </div>
  );
};

export default UserLogin;
