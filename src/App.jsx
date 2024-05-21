import React from 'react';
import { ToastContainer } from 'react-toastify';
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
          {/* <Profile /> */}
          {/* <Register /> */}
          <Login />
        </div>
      </div>



      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </div>
  );
};

export default App;


