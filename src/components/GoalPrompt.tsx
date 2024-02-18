import React, { ChangeEvent, ReactEventHandler, useState } from 'react'
import { appendGoal } from '../logic/Goal'

const GoalPrompt = ( {onSave} : {onSave: Function}) => {
    const [goalName, setGoalName] = useState('');
    const [goalBody, setGoalBody] = useState('');
    const [goalAmount, setGoalAmount] = useState(0);

    const updateGoalName = (e: ChangeEvent) => {
        setGoalName((e.target as HTMLInputElement).value);
    }

    const updateGoalBody = (e: ChangeEvent) => {
        setGoalBody((e.target as HTMLInputElement).value);
    }

    const updateGoalAmount = (e: ChangeEvent) => {
        setGoalAmount(+(e.target as HTMLInputElement).value);
    }
    

    return (
        <div className='grid grid-cols-6 p-3 bg-gray-800 rounded-xl overflow-hidden border-4 border-primary-400'>
            <div className='col-span-4 flex flex-col gap-2'>
                <input type='text' placeholder='Goal name...' className='w-full bg-gray-700 py-1 px-3 rounded-xl' onChange={updateGoalName}/>
                <input type='text' placeholder='Description...' className='w-full bg-gray-700 py-1 px-3 rounded-xl' onChange={updateGoalBody}/>
                <div className='flex flex-row gap-2'>
                    <p className='flex items-center'>$</p>
                    <input type='number' placeholder='Amount...' className='w-full bg-gray-700 py-1 px-3 rounded-xl' onChange={updateGoalAmount}/>
                </div>

            </div>
            <div className='flex col-span-2 items-center justify-end'>
                <div className='flex flex-col gap-2'>
                    <button className='bg-secondary-600 hover:bg-secondary-700 py-2 px-4 rounded-xl' onClick={() => {
                        appendGoal({name: goalName, body: goalBody, targetAmount: goalAmount, contributedAmount: 0});
                        onSave();
                }}>Save</button>
                </div>
                
            </div>
        </div>
  )
}

export default GoalPrompt
