import React from 'react'
import { SlMenu, SlUser, SlPlus, SlPieChart } from 'react-icons/sl';
import './index.css'
import Sidebar from './components/shared/Sidebar'

function App() {
  return (
    <div className=' bg-gray-700 w-full min-h-screen'>
      <Sidebar />

      {/* Menu movil */}

      <nav className=' bg-gray-800 lg:hidden fixed w-full bottom-0 left-0 text-3xl py-4 px-8 flex items-center justify-between rounded-t-xl rounded-tr-xl text-gray-400'>
        <button>
          <SlUser />
        </button>
        <button>
          <SlPlus />
        </button>
        <button>
          <SlPieChart />
        </button>
        <button>
          <SlMenu className=' text-white'/>
        </button>
      </nav>
    </div>
  );
}

export default App
