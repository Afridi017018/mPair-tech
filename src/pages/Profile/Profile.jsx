import React from 'react';
import avatar from "../../../public/avatar.jpg"

const Profile = () => {
    return (
        <div>
            <div className='text-xl font-bold my-5'>
            <h3 className='text-gray-600'>Profile Information</h3>
            </div>

<div>
    <img src={avatar} className="w-24 h-24 rounded-full" alt="" />
</div>

        </div>
    );
};

export default Profile;