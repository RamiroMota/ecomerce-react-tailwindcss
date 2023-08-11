import React from 'react'
import logo from '../../assets/online-shop.webp'
import { SlHome } from 'react-icons/sl';

function Sidebar() {
  return (
    <div className='bg-gray-800 fixed left-0 top-0 w-28 h-full'>
        <img className='items-center my-2 p-4' src={logo} alt="Logo" />

        <ul className='pl-4'>
            <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl'>
                <a className=' text-white p-4 block bg-cyan-600 hover:bg-cyan-500 rounded-xl' href=""><SlHome className=' text-2xl' /></a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar