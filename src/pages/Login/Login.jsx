import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='w-[414px] p-10 mx-auto  border-blue-400 border-t-4' style={{ background: 'rgba(244, 250, 252, 1)' }} >


                <div className=' w-[328px]'>


                    <div className='mb-8'>
                        <h4 className='text-xl my-2 font-bold' style={{ color: 'rgba(35, 151, 200, 1)' }}>Welcome to PureLedger</h4>
                        <p className=' text-base my-2' style={{ color: 'rgba(158, 158, 158, 1)' }}>Please Login to continue</p>
                    </div>


                    <div>


                        <div className='py-2'>


                            <label
                                htmlFor="eid"

                            >
                                Employee ID
                                <input type="text" placeholder="Enter Employee ID here" name='eid' className="input input-bordered rounded-md w-full mt-2" required />
                            </label>
                        </div>


                        <div className='py-2'>

                            <label
                                htmlFor="password"

                            >
                                Password
                                <input type="password" placeholder="Enter Password here" name='password' className="input input-bordered rounded-md w-full" required />
                            </label>

                        </div>



                        <div>
                            <button className='w-full h-8 rounded text-white mt-7' style={{ background: 'rgba(35, 151, 200, 1)' }}>Login</button>
                        </div>
                        <div className='text-sm flex gap-2 justify-center mt-8'>
                            <p style={{color : "rgba(158, 158, 158, 1)"}}>Don’t have an account?</p>
                            <p style={{color : "rgba(35, 151, 200, 1)"}}>Register Now!</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;