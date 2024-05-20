import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

const App = () => {
  return (
    <div className='h-screen'>

    <NavBar />
    <Profile />
        {/* <Register /> */}
    {/* <Login /> */}
    </div>
  );
};

export default App;