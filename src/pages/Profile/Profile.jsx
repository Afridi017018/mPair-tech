import React from 'react';
import { useContext } from 'react';
import avatar from "../../../public/avatar.jpg"
import { AuthContext } from '../../../public/providers/AuthProviders';
import Sidebar from '../../components/SideBar/SideBar';

const Profile = () => {
const {user} = useContext(AuthContext)

    return (
        <div className='flex max-h-[auto] h-screen'>
            <Sidebar/>
            
{
    user.length > 0 &&
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
                    <h3 className='text-gray-600 font-bold capitalize'>{user[0].user.name}</h3>
                </div>

                <div className='my-2'>
                    <p className='text-sm text-gray-400'>Position</p>
                    <h3 className='text-gray-600 font-bold capitalize'>{user[0].user.position}</h3>
                </div>

                <div className='my-3'>
                    <p className='text-sm text-gray-400'>Gender</p>
                    <h3 className='text-gray-600 font-bold capitalize'>{user[0].user.gender}</h3>
                </div>

    

                <div className='my-3'>
                    <p className='text-sm text-gray-400'>Email</p>
                    <h3 className='text-gray-600 font-bold'>{user[0].user.email}</h3>
                </div>

                <div className='my-3'>
                    <p className='text-sm text-gray-400'>Employee ID</p>
                    <h3 className='text-gray-600 font-bold'>{user[0].user.eid}</h3>
                </div>

            </div>
            </div>
}
        </div>
    );
};

export default Profile;