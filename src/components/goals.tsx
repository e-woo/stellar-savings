import React, { useState } from 'react'
import { Goal } from '../logic/Goal';
import GoalItem from './GoalItem';

const Goals = () => {
  const [goals, setGoals] = useState<Array<Goal>>([]);

  const addGoal = () => {
    setGoals([...goals, {name:"test", body:"test2", amount:1}])
  }

  return (
    <div className='flex flex-col p-8 gap-8'>

      <h2 className='text-4xl font-bold text-center'>Goals</h2>
      <ul className='px-4 flex flex-col max-h-[60vh] items-center overflow-y-scroll'>
        {goals.map((goal, index) => {return <li key={index} className='w-full py-2'>
          <GoalItem goal={goal}/>
        </li>
        })}
      </ul>
      <button onClick={addGoal} className='py-4 mx-8 rounded-xl bg-red-400'>Add goal</button>
    </div>
  )
}

export default Goals;
