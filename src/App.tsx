import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='grid grid-cols-14 grid-flow-col h-[100vh]'>
        <div className='col-span-4 bg-slate-500'>test</div>
        <div className='col-span-6 bg-black'>test</div>
        <div className='col-span-4 bg-slate-500'>test</div>
      </div>
    </>
  )
}

export default App
