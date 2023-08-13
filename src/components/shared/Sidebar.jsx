import React from 'react'
import logo from '../../assets/online-shop.webp'
import { SlHome, SlFire, SlPieChart, SlEnvolope, SlBell, SlSettings, SlLogout } from 'react-icons/sl';

function Sidebar() {
  return (
    <div className='bg-gray-800 fixed left-0 top-0 w-28 h-full'>
          <ul className='pl-4'>
            <li>
            <img className='items-center my-2 p-4' src={logo} alt="Logo" />
            </li>
            <li className=' bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl'>
                <a className=' bg-cyan-600 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlHome className=' text-2xl' /></a>
            </li>
            <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a className=' group-hover:bg-cyan-600 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlFire className=' text-2xl' /></a>
            </li>
            <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a className=' group-hover:bg-cyan-600 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlPieChart className=' text-2xl' /></a>
            </li>
            <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a className=' group-hover:bg-cyan-600 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlEnvolope className=' text-2xl' /></a>
            </li>
            <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a className=' group-hover:bg-cyan-600 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlBell className=' text-2xl' /></a>
            </li>
            <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a className=' group-hover:bg-cyan-600 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlSettings className=' text-2xl' /></a>
            </li>
            <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a className=' group-hover:bg-cyan-600 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlLogout className=' text-2xl' /></a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar