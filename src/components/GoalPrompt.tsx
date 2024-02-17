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
        setGoalAmount((e.target as HTMLInputElement).value as unknown as number);
    }
    

    return (
        <div className='grid grid-cols-6 bg-green-400 p-3'>
            <div className='col-span-4 flex flex-col gap-2'>
                <input type='text' placeholder='Goal name...' onChange={updateGoalName}/>
                <input type='text' placeholder='Description...' onChange={updateGoalBody}/>
                <input type='number' placeholder='Amount...' onChange={updateGoalAmount}/>
            

            </div>
            <div className='flex col-span-2 items-center justify-end'>
                <div className='flex flex-col gap-2'>
                    <button className='bg-blue-500 py-2 px-4 rounded-xl' onClick={() => {
                        appendGoal({name: goalName, body: goalBody, amount: goalAmount});
                        onSave();
                }}>Save</button>
                </div>
                
            </div>
        </div>
  )
}

export default GoalPrompt
