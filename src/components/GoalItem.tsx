import React, { ChangeEvent, useState } from 'react'
import { Goal, deleteGoal, editGoal } from '../logic/Goal'
import star from '../assets/star-fill.png';

const GoalItem = ({ goal, onFinish, index } : { goal: Goal, onFinish: Function, index: number }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [goalName, setGoalName] = useState(goal.name);
    const [goalBody, setGoalBody] = useState(goal.body);
    const [goalAmount, setGoalAmount] = useState(goal.targetAmount);

    const updateGoalName = (e: ChangeEvent) => {
        setGoalName((e.target as HTMLInputElement).value);
    }

    const updateGoalBody = (e: ChangeEvent) => {
        setGoalBody((e.target as HTMLInputElement).value);
    }

    const updateGoalAmount = (e: ChangeEvent) => {
        setGoalAmount(+(e.target as HTMLInputElement).value);
    }

    const handleDelete = () => {
        deleteGoal(index);
        setIsEditing(false);
        onFinish();
    }

    const handleEdit = () => {
        editGoal({name: goalName, body: goalBody, targetAmount: goalAmount, contributedAmount: goal.contributedAmount}, index);
        setIsEditing(false);
        onFinish();
    }

    return (
        <div className='relative flex flex-col bg-gray-800 rounded-xl overflow-hidden border-4 border-primary-400'>
            <div className='grid grid-cols-6 p-3 gap-4'>
                <div className='col-span-4 flex flex-col gap-2'> {
                    isEditing ? <>
                        <input type='text' placeholder='Goal name...' className='w-full bg-gray-700 py-1 px-3 rounded-xl' defaultValue={goal.name} onChange={updateGoalName}/>
                        <input type='text' placeholder='Description...' className='w-full bg-gray-700 py-1 px-3 rounded-xl' defaultValue={goal.body} onChange={updateGoalBody}/>
                        <div className='flex flex-row gap-2'>
                            <p className='flex items-center'>$</p>
                            <input type='number' placeholder='Amount...' className='w-full bg-gray-700 py-1 px-3 rounded-xl' defaultValue={goal.targetAmount} onChange={updateGoalAmount}/>
                        </div>
                    </> : <>
                        <h3 className='text-xl font-semibold text-wrap'>{goal.name}</h3>
                        <p className='text-wrap'>{goal.body}</p>
                        <p>{`$${goal.contributedAmount} / $${goal.targetAmount}`}</p>
                    </>
                }

                </div>
                <div className='flex col-span-2 items-center justify-end'> {
                    isEditing ? 
                    <div className='flex flex-col gap-2'>
                        <button className='bg-secondary-600 hover:bg-secondary-700 py-2 px-4 rounded-xl' onClick={handleDelete}>Delete</button>
                        <button className='bg-secondary-400 hover:bg-secondary-500 py-2 px-4 rounded-xl' onClick={handleEdit}>Save</button>
                    </div> : 
                    <button className='bg-secondary-500 hover:bg-secondary-600 py-2 px-4 rounded-xl' onClick={() => setIsEditing(true)}>Edit</button>
                }
                    
                </div>
            </div>
            {goal.contributedAmount === 0 ? null : <span className='bg-secondary-100 h-2' style={{width: `${Math.round(goal.contributedAmount * 100 / goal.targetAmount)}%`}}/>
            }
            {goal.contributedAmount != goal.targetAmount || isEditing ? null : <img 
            className="absolute top-[2vh] left-[17.25vw] h-5 w-5" 
            src={star}/> }
            
        </div>
    )
}

export default GoalItem
