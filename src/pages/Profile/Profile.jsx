import React from 'react';
import avatar from "../../../public/avatar.jpg"
import Sidebar from '../../components/SideBar/SideBar';

const Profile = () => {
    return (
        <div className='flex max-h-[auto] h-screen'>
            <Sidebar/>
            <div>


            <div className='text-xl font-bold m-5'>
                <h3 className='text-gray-600'>Profile Information</h3>
            </div>


            <div className='w-1/2 mx-44'>
                <div className='w-2/3 flex justify-center'>
                    <img src={avatar} className="w-24 h-24 rounded-full" alt="" />
                </div>

                <div className='my-2'>
                    <p className='text-sm text-gray-400'>Full Name</p>
                    <h3 className='text-gray-600 font-bold'>Aminul Islam</h3>
                </div>

                <div className='my-2'>
                    <p className='text-sm text-gray-400'>Position</p>
                    <h3 className='text-gray-600 font-bold'>Accounts Manager</h3>
                </div>

                <div className='my-3'>
                    <p className='text-sm text-gray-400'>Gender</p>
                    <h3 className='text-gray-600 font-bold'>Male</h3>
                </div>

                <div className='my-3'>
                    <p className='text-sm text-gray-400'>Date Of Birth</p>
                    <h3 className='text-gray-600 font-bold'>12-01-1996</h3>
                </div>

                <div className='my-3'>
                    <p className='text-sm text-gray-400'>Email</p>
                    <h3 className='text-gray-600 font-bold'>Aminulislam@gmail.com</h3>
                </div>

                <div className='my-3'>
                    <p className='text-sm text-gray-400'>Employee ID</p>
                    <h3 className='text-gray-600 font-bold'>983465</h3>
                </div>

            </div>
            </div>

        </div>
    );
};

export default Profile;