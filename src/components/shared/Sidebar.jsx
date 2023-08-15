import React from 'react'
import logo from '../../assets/online-shop.webp'
import { SlHome, SlFire, SlPieChart, SlEnvolope, SlBell, SlSettings, SlLogout } from 'react-icons/sl';

const Sidebar = (props) => {
    const {showMenu} = props;
  return (
    <div className={`bg-gray-800 fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
        <div>
            <ul className='pl-4'>
                <li>
                    <img className='items-center my-2 p-4' src={logo} alt="Logo" />
                </li>
                <li className=' bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl'>
                    <a className=' bg-cyan-400 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlHome className=' text-2xl' /></a>
                </li>
                <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                    <a className=' group-hover:bg-cyan-400 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlFire className=' text-2xl' /></a>
                </li>
                <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                    <a className=' group-hover:bg-cyan-400 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlPieChart className=' text-2xl' /></a>
                </li>
                <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                    <a className=' group-hover:bg-cyan-400 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlEnvolope className=' text-2xl' /></a>
                </li>
                <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                    <a className=' group-hover:bg-cyan-400 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlBell className=' text-2xl' /></a>
                </li>
                <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                    <a className=' group-hover:bg-cyan-400 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlSettings className=' text-2xl' /></a>
                </li>
            </ul>
        </div>
        <div>
            <ul className='pl-4'>
                <li className=' hover:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                    <a className=' group-hover:bg-cyan-600 group-hover:text-white p-4 flex justify-center text-white rounded-xl transition-colors' href=""><SlLogout className=' text-2xl' /></a>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default Sidebar