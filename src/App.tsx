import { useState } from 'react'
import Goals from './components/Goals'
import Transactions from './components/Transactions'
import './App.css'

function App() {
  const [selectedGoalName, setSelectedGoalName] = useState('');

  return (
    <>
      <div className='grid grid-cols-14 grid-flow-col h-[100vh]'>
        <div className='col-span-4 bg-slate-500 w-0 min-w-full'>
          <Goals/>
        </div>
        <div className='col-span-6 bg-black w-0 min-w-full'>Tree</div>
        <div className='col-span-4 bg-slate-500 w-0 min-w-full'><Transactions/></div>
      </div>
    </>
  )
}

export default App
