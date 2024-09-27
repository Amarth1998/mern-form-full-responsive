import React from 'react';
import { useAuth } from './AuthContext'; 

const Home = () => {
  const { username } = useAuth();

  return (
    <div className='hometocontainer'>
     <div className="home-container">
      
      {username ? (
        <h2 className="welcome-message">Welcome, {username}!</h2>
      ) : (
        <h2 className="welcome-message">Welcome, Guest!</h2>
      )}
      <p className="home-description">
        This application allows you to register, log in, and manage your account securely.
        Explore our features and enjoy your stay!
      </p>
      <p className="home-description">
        If you're new, feel free to Register and start using our services.
      </p>
    </div>
    </div>
  );
}
export default Home;
