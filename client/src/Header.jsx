import React from 'react';
import { Link } from 'react-router-dom'; 
import { useAuth } from './AuthContext'; 

const Header = () => {
  const { logout, username, token } = useAuth();

  const handleLogout = () => {
    logout();

  };

  return (
    <header className="header">
      
      <div className="logo">Vistaar Webx Assignment</div>

      <nav className="nav">
        <Link className="nav-link" to="/">Home</Link>

        {/* Show registration and login links only if the user is not logged in */}
        {!token ? (
          <>
            <Link className="nav-link" to="/userregistration">Registration</Link>
            <Link className="nav-link" to="/userlogin">Login</Link>
          </>
        ) : (
          <>
            <Link className="nav-link logout" onClick={handleLogout}>Logout</Link>
            <span className="welcome">| {username}</span>

          </>
        )}
        
      </nav>
    
      
    </header>
  );
};

export default Header;
