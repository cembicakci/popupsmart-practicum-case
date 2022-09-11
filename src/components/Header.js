import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'

function Header() {

    const navigate = useNavigate();

    const { name } = useContext(AuthContext);
    const nameText = name[0].toUpperCase() + name.substring(1); //first letter uppercase

    function handleClick() {
        navigate('/login');
        localStorage.removeItem('name')
    }

    return (
        <header className='bg-gray-200 border-b-2 border-gray-400'>
            <div className='flex items-center justify-between max-w-[1100px] mx-auto py-4'>
                <div>
                    <h1 className='text-3xl'>Hello <span className='text-red-900 italic'>{nameText}</span>, Welcome!</h1>
                    <small className='italic'>Hope you are doing great today!</small>
                </div>

                <button className='px-4 py-2 inline-block bg-red-600 text-white rounded hover:bg-red-800 hover:transition-all' onClick={handleClick}>Logout</button>
            </div>
        </header>
    )
}

export default Header