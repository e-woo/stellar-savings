import React, { useEffect, useState } from 'react'
import { updateGoal } from '../logic/Transactions';

const Transactions = () => {
    const [inputValue, setInputValue] = useState('');
    const [contributionAmount, setContributionAmount] = useState(0);
    const [selected, setSelected] = useState('Deposit');
    const [currentGoal, setCurrentGoal] = useState({name: '', body: '', targetAmount: 0, contributedAmount: 0});
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const goals = JSON.parse(localStorage.getItem('goals') || '[]');
        console.log(goals);
    }, []);

    const goals = JSON.parse(localStorage.getItem('goals') || '[]');

    const handleGoalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = parseInt(e.target.value, 10);
        setIndex(selectedIndex);
        setCurrentGoal(goals[selectedIndex]);
        setContributionAmount(goals[selectedIndex].contributedAmount);
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue("$" + e.target.value.replace(/^\$/, ''));
    }
    
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitted');
        const amount = parseFloat(inputValue.slice(1));
        let newContributionAmount = contributionAmount;

        if(selected === 'Withdraw'){
            if(contributionAmount >= amount){
                newContributionAmount -= amount;
            }else{
                alert('You do not have enough funds');
                return;
            }
        }
        else{
            newContributionAmount += amount;
        }

        setContributionAmount(newContributionAmount);
        updateGoal(index, newContributionAmount);
    };


  return (
    <div className='flex justify-center items-center flex-col gap-5 rounded-xl border-primary-400 border-4'>
        {currentGoal.name ? (
            <div className='text-4xl font-bold text-center'>{currentGoal.name || 'Goal Name'}</div>
        ): null}
            <form onSubmit={handleSubmit}>
            <select onChange={handleGoalChange} className='mb-4 p-2 rounded-xl text-sm outline-0 bg-gray-700 hover:bg-gray-800 focus:ring-black focus:ring-1 rounded-md text-gray-400'>
                <option value="" disabled selected>Select a goal</option>
                {goals.map((goal: any, index: number) => (
                    <option key={index} value={index}>{goal.name}</option>
                ))}
            </select>
                <div className='flex flex-row w-full gap-5 mb-5'>
                    <select onChange={handleSelectChange} className='w-32 py-2 px-4 rounded-xl text-sm outline-0 bg-gray-700 hover:bg-gray-800 focus:ring-black focus:ring-1 rounded-md text-gray-400'>
                        <option value="Deposit">Deposit</option>
                        <option value="Withdraw">Withdraw</option>
                    </select>
                    <input 
                        placeholder='$' 
                        className='p-2 w-44 text-sm w-full bg-gray-700 py-1 px-3 rounded-xl font-bold outline-0 focus:bg-gray-800 placeholder:text-gray-400 text-black'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-secondary-400 hover:bg-secondary-500 py-2 px-4 rounded-xl'>Submit</button>
                </div>
        </form>
        <div className='font-bold text-lg'>
            History
        </div>
        <div>
            <div className='flex justify-center items-center'>Date</div>
            <div className='flex justify-center items-center'>Amount: ${contributionAmount}/${currentGoal.targetAmount}</div>
        </div>
            
    </div>
  )
}

export default Transactions
