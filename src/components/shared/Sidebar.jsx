import React from 'react'
import logo from '../../assets/online-shop.webp'
import { SlHome } from 'react-icons/sl';

function Sidebar() {
  return (
    <div className='bg-gray-800 fixed left-0 top-0 w-28 h-full'>
          <ul className='pl-4'>
            <li>
            <img className='items-center my-2 p-4' src={logo} alt="Logo" />
            </li>
            <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl'>
                <a className=' text-white p-4 flex justify-center bg-cyan-600 rounded-xl' href=""><SlHome className=' text-2xl' /></a>
            </li>
            <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group'>
                <a className=' group-hover:bg-cyan-600 group-hover:text-white p-4 flex justify-center text-white rounded-xl' href=""><SlHome className=' text-2xl' /></a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar