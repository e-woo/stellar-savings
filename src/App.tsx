import { useState } from 'react'
import './App.css'
import Transactions from './components/Transactions'

function App() {

  return (
    <>
      <div className='grid grid-cols-14 grid-flow-col h-[100vh]'>
        <div className='col-span-4 bg-slate-500'>Goals</div>
        <div className='col-span-6 bg-black'>Tree</div>
        <div className='col-span-4 bg-slate-500'><Transactions></Transactions></div>
      </div>
    </>
  )
}

export default App
