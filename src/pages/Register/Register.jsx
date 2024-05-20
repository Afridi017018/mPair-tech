import React from 'react';

const Register = () => {
    return (
        <div>
            <div className='h-[609px] w-[414px] p-10 mx-auto border-blue-400 border-t-4 mt-10' style={{ background: 'rgba(244, 250, 252, 1)' }} >


                <div className='h-[510px] w-[328px]'>


                    <div className='mb-8'>
                        <h4 className='text-xl my-2 font-bold' style={{ color: 'rgba(35, 151, 200, 1)' }}>Welcome to PureLedger</h4>
                        <p className=' text-base my-2' style={{ color: 'rgba(158, 158, 158, 1)' }}>Fill up this form to Register</p>
                    </div>


                    <div>

                        <div className='py-2'>
                            <input type="text" placeholder="Full Name" name='name' className="input input-bordered rounded-md w-full" required />
                        </div>

                        <div className='flex gap-2'>
                            <div className='py-2 w-full'>
                                <select
                                    id="gender"
                                    name="gender"
                                    defaultValue={""}
                                    className={`w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 h-12 text-gray-400`}
                                >
                                    <option value="" disabled>Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>


                            <div className='py-2'>
                                <input type="date" name='dob' className="input input-bordered rounded-md w-full text-gray-400" required />
                            </div>
                        </div>

                        <div className='py-2'>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered rounded-md w-full" required />
                        </div>

                        <div className='py-2'>
                            <input type="text" placeholder="Employee ID" name='eid' className="input input-bordered rounded-md w-full" required />
                        </div>

                        <div className='py-2'>
                            <input type="text" placeholder="Position In Organization" name='position' className="input input-bordered rounded-md w-full" required />
                        </div>

                        <div className='py-2'>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered rounded-md w-full" required />
                        </div>

                        <div>
                            <button className='w-full h-8 rounded text-white mt-7' style={{ background: 'rgba(35, 151, 200, 1)' }}>Register</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;