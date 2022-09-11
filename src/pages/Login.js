import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from './context/AuthContext';

function Login() {

    const navigate = useNavigate();
    const { name } = useContext(AuthContext);
    const { setName } = useContext(AuthContext);

    function handleSumbit(e) {
        e.preventDefault();
        
        if (name) {
            localStorage.setItem("name", name);
            navigate('/')
        }
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='bg-gray-300 flex flex-col items-center mx-auto px-14 py-8'>
                <h1 className='font-bold mt-4 text-2xl'>Popupsmart Todo App</h1>
                <form className='my-16 w-64 d-flex items-center flex-col justify-center' onSubmit={handleSumbit}>
                    <input type='text' placeholder='Please enter your name.' className='p-2 rounded w-full outline-none' value={name} onChange={(e) => setName(e.target.value)} />
                    <button className='px-8 py-2 mt-4 inline-block bg-gray-600 text-white rounded w-full hover:bg-gray-800 hover:transition-all'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login