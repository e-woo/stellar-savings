import React, { ChangeEvent, useState } from 'react'
import { Goal, deleteGoal, editGoal } from '../logic/Goal'

const GoalItem = ({ goal, onFinish, index } : { goal: Goal, onFinish: Function, index: number }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [goalName, setGoalName] = useState(goal.name);
    const [goalBody, setGoalBody] = useState(goal.body);
    const [goalAmount, setGoalAmount] = useState(goal.amount);

    const updateGoalName = (e: ChangeEvent) => {
        setGoalName((e.target as HTMLInputElement).value);
    }

    const updateGoalBody = (e: ChangeEvent) => {
        setGoalBody((e.target as HTMLInputElement).value);
    }

    const updateGoalAmount = (e: ChangeEvent) => {
        setGoalAmount((e.target as HTMLInputElement).value as unknown as number);
    }

    const handleDelete = () => {
        deleteGoal(index);
        setIsEditing(false);
        onFinish();
    }

    const handleEdit = () => {
        editGoal({name: goalName, body: goalBody, amount: goalAmount}, index);
        setIsEditing(false);
        onFinish();
    }

    return (
        <div className='grid grid-cols-6 bg-green-400 p-3'>
            <div className='col-span-4 flex flex-col gap-2'> {
                isEditing ? <>
                    <input type='text' placeholder='Goal name...' className='w-full' defaultValue={goal.name} onChange={updateGoalName}/>
                    <input type='text' placeholder='Description...' defaultValue={goal.body} onChange={updateGoalBody}/>
                    <input type='number' placeholder='Amount...' defaultValue={goal.amount} onChange={updateGoalAmount}/>
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
                    <button className='bg-purple-500 py-2 px-4 rounded-xl' onClick={handleDelete}>Delete</button>
                    <button className='bg-blue-500 py-2 px-4 rounded-xl' onClick={handleEdit}>Save</button>
                </div> : 
                <button className='bg-yellow-300 py-2 px-4 rounded-xl' onClick={() => setIsEditing(true)}>Edit</button>
            }
                
            </div>
        </div>
    )
}

export default GoalItem
