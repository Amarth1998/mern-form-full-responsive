import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(() => localStorage.getItem("username") || '');
  const [token, setToken] = useState(() => localStorage.getItem("token") || '');
  const navigate = useNavigate(); 

  const login = (userData) => {
    setUsername(userData.username);
    setToken(userData.token);
    localStorage.setItem("username", userData.username);
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken('');
    setUsername('');
    navigate("/userlogin"); // Navigate to user login page upon logout
  };

  return (
    <AuthContext.Provider value={{ username, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
