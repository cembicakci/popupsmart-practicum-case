import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
import { MdDarkMode } from 'react-icons/md'

function Header() {

    const navigate = useNavigate();

    function handleClick() {
        localStorage.removeItem('name')
        navigate('/login');
    }

    function handleDarkMode(){
        console.log("Clicked")
    }

    return (
        <>
            <header className='bg-gray-200 border-b-2 border-gray-400'>
                <div className='flex items-center justify-between max-w-[1100px] mx-auto py-4'>
                    <div>
                        <h1 className='text-2xl'>Hello <span className='text-white italic bg-gray-400 px-6 py-1'>{localStorage.getItem('name')[0].toUpperCase() + localStorage.getItem('name').substring(1)}</span>, Welcome!</h1>
                        <small className='italic'>Hope you are doing great today!</small>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button className='mx-4' onClick={handleDarkMode}>
                            <MdDarkMode size={30} />
                        </button>
                        <button className='px-4 py-2 inline-block bg-red-600 text-white rounded hover:bg-red-800 hover:transition-all' onClick={handleClick}>Logout</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header