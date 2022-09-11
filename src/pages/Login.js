import React from 'react'

function Login() {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='bg-gray-300 flex flex-col items-center mx-auto px-14 py-8'>
                <h1 className='font-bold mt-4 text-2xl'>Popupsmart Todo App</h1>
                <form className='my-16 w-64 d-flex items-center flex-col justify-center'>
                    <input type='text' placeholder='Please enter your name.' className='p-2 rounded w-full outline-none'/>
                    <button className='px-8 py-2 mt-4 inline-block bg-gray-600 text-white rounded w-full hover:bg-gray-800 hover:transition-all'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login