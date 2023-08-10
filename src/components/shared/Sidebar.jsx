import React from 'react'
import logo from '../../assets/online-shop.webp'
import { FaHome, FaEnvelope, FaUser } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className=' bg-gray-800 fixed left-0 top-0 w-28 h-full p-4'>
        <img className=' items-center my-2' src={logo} alt="Logo" />

        <ul>
            <li>
                <a href=""></a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar