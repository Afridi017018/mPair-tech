import React from 'react';
import logo from '../../../public/logo.png'
import avatar from '../../../public/avatar.jpg'

const NavBar = () => {
    return (
        <div>

            <div style={{ background: "rgba(35, 151, 200, 1)" }}>
                <div className="navbar px-10">
                    <div className="flex-1">
                        <img src={logo} className="h-7" ></img>
                    </div>
                    <div className="flex-none gap-2">

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={avatar} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default NavBar;