import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/SideBar/SideBar';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
    <NavBar />
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1 p-5">
        <Profile />
        {/* <Register /> */}
        {/* <Login /> */}
      </div>
    </div>
  </div>
  );
};

export default App;


