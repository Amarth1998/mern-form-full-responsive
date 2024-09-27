import React from 'react';
import UserLogin from './UserLogin';
import Layout from './Layout';
import UserRegistration from './UserRegistration';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import your AuthProvider

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="userregistration" element={<UserRegistration />} />
            <Route path="userlogin" element={<UserLogin />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
