import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dob: '',
        email: '',
        eid: '',
        position: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (data.message === "Registered Successfully !!!") {
                toast.dismiss()
                toast.success(data.message)
                navigate("/")
            }
            else {
                toast.dismiss()
                toast.error(data.message)
            }

        } catch (error) {
            console.error('Error:', error);

        }
    };


    return (
        <div>
            <div className='h-[609px] w-[414px] p-10 mx-auto border-blue-400 border-t-4 mt-10' style={{ background: 'rgba(244, 250, 252, 1)' }}>
                <div className='h-[510px] w-[328px]'>
                    <div className='mb-8'>
                        <h4 className='text-xl my-2 font-bold' style={{ color: 'rgba(35, 151, 200, 1)' }}>Welcome to PureLedger</h4>
                        <p className=' text-base my-2' style={{ color: 'rgba(158, 158, 158, 1)' }}>Fill up this form to Register</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='py-2'>
                                <input type="text" placeholder="Full Name" name='name' className="input input-bordered rounded-md w-full" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className='flex gap-2'>
                                <div className='py-2 w-full'>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className={`w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 h-12 text-gray-400`}
                                        required
                                    >
                                        <option value="" disabled>Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className='py-2'>
                                    <input type="date" name='dob' className="input input-bordered rounded-md w-full text-gray-400" value={formData.dob} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='py-2'>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered rounded-md w-full" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className='py-2'>
                                <input type="text" placeholder="Employee ID" name='eid' className="input input-bordered rounded-md w-full" value={formData.eid} onChange={handleChange} required />
                            </div>
                            <div className='py-2'>
                                <input type="text" placeholder="Position In Organization" name='position' className="input input-bordered rounded-md w-full" value={formData.position} onChange={handleChange} required />
                            </div>
                            <div className='py-2'>
                                <input type="password" placeholder="Password" name='password' className="input input-bordered rounded-md w-full" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div>
                                <button type="submit" className='w-full h-8 rounded text-white mt-7' style={{ background: 'rgba(35, 151, 200, 1)' }}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
