import { useState } from 'react'
import Goals from './components/Goals'
import Transactions from './components/Transactions'
import Tree from './components/Tree'
import Log from './components/Log'
import './App.css'

function App() {

  return (
    <>
      <div className='grid grid-cols-14 grid-flow-col h-[100vh] bg-gray-900 text-white'>
        <div className='col-span-4 w-0 min-w-full'>
          <Goals/>
        </div>
        <div className='col-span-6 w-0 min-w-full'><Tree></Tree></div>
        
        <div className='col-span-4 w-0 min-w-full'>
        <div><Transactions></Transactions></div>
        <div><Log></Log></div>
          </div>
      </div>
    </>
  )
}

export default App
