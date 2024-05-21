import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../public/providers/AuthProviders';

import Layout from './layout';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {isAuthenticated ? (
            <Route index element={<Profile />} />
          ) : (
            <Route index element={<Login />} />
          )}
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;