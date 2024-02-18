import { useState } from 'react'
import Goals from './components/Goals'
import Transactions from './components/Transactions'
import Tree from './components/Tree'
import TipBox from './components/TipBox'
import Log from './components/Log'
import './App.css'

function App() {

  return (
    <>
      <div className='grid grid-cols-14 grid-flow-col h-[100vh] bg-gray-900 text-white overflow-hidden overscroll-none'>
        <div className='col-span-4 w-0 min-w-full'>
          <Goals/>
        </div>

        <div className='col-span-6 w-0 min-w-full'>
          <div className=''><TipBox></TipBox></div>
        </div>
        
        <div className='col-span-4 w-0 min-w-full'>
        <div><Transactions></Transactions></div>
          </div>
      </div>
    </>
  )
}

export default App
