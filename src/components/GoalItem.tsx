import React, { useState } from 'react'
import { Goal } from '../logic/Goal'

const GoalItem = ({ goal } : { goal: Goal }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        // edit data in localstorage here
        setIsEditing(false);
    }

    return (
        <div className='grid grid-cols-6 bg-green-400 p-3'>
            <div className='col-span-4 flex flex-col gap-2'> {
                isEditing ? <>
                    <input type='text' placeholder='Goal name...' className='w-full' defaultValue={goal.name}/>
                    <input type='text' placeholder='Description...' defaultValue={goal.body}/>
                    <input type='number' placeholder='Amount...' defaultValue={goal.amount}/>
                </> : <>
                    <h3 className='text-xl font-semibold'>{goal.name}</h3>
                    <p>{goal.body}</p>
                    <p>{"$" + goal.amount}</p>
                </>
            }

            </div>
            <div className='flex col-span-2 items-center justify-end'> {
                isEditing ? 
                <div className='flex flex-col gap-2'>
                    <button className='bg-purple-500 py-2 px-4 rounded-xl' onClick={() => setIsEditing(false)}>Cancel</button>
                    <button className='bg-blue-500 py-2 px-4 rounded-xl' onClick={handleEdit}>Save</button>
                </div> : 
                <button className='bg-yellow-300 py-2 px-4 rounded-xl' onClick={() => setIsEditing(true)}>Edit</button>
            }
                
            </div>
        </div>
    )
}

export default GoalItem
