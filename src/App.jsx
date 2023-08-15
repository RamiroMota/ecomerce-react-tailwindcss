import React from 'react'
import { useState } from 'react';
import { SlMenu, SlUser, SlPlus, SlPieChart, SlClose, SlMagnifier } from 'react-icons/sl';
import './index.css'

// importación de componentes
import Sidebar from './components/shared/Sidebar'

function App() {

  const [showMenu, setShowMenu ] = useState(false);
  const [showOrder, setShowOrder ] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className=' bg-gray-700 w-full min-h-screen'>
      <Sidebar showMenu = {showMenu} />

      {/* Menu movil */}

      <nav className=' bg-gray-800 lg:hidden fixed w-full bottom-0 left-0 text-3xl py-4 px-8 flex items-center justify-between rounded-t-xl rounded-tr-xl text-gray-400'>
        <button className=' p-2'>
          <SlUser />
        </button>
        <button className=' p-2'>
          <SlPlus />
        </button>
        <button className=' p-2'>
          <SlPieChart />
        </button>
        <button onClick={toggleMenu} className=' text-white p-2 hover:scale-110 hover:bg-indigo-500 hover:rounded-full duration-300'>
          {showMenu ? <SlClose /> : <SlMenu /> }
        </button>
      </nav>
      <main className=' lg:pl-28 grid-cols-1 lg:grid-cols-8'>
        <div className=' lg:col-span-6'>
          <header className='p-4'>
            <div>
              <h1 className='text-xl text-gray-300'>Nombre del restaurante</h1>
              <p className=' text-gray-500'>Lunes 14 de Agosto del 2023</p>
            </div>
            <form action="">
              <div className=' w-full relative'>
                <SlMagnifier className=' text-gray-100 absolute left-3 top-1/2 -translate-y-1/2 runde'/>
                <input className=' bg-gray-800 rounded-full w-full py-2 pl-9 pr-4 text-gray-300 outline-none' type="text" />
              </div>
            </form>
          </header>
        </div>
        <div className=' lg:col-span-2 bg-red-400 fixed lg:static right-0'>carrito</div>
      </main>
    </div>
  );
}

export default App
