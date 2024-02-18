import React, { useEffect, useState } from 'react'
import { updateGoal } from '../logic/Transactions';

const Transactions = () => {
    const [inputValue, setInputValue] = useState('');
    const [addition, setAddition] = useState(0);
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
        setAddition(goals[selectedIndex].contributedAmount);
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
        let newAddition = addition;

        if(selected === 'Withdraw'){
            if(addition >= amount){
                newAddition -= amount;
            }else{
                alert('You do not have enough funds');
                return;
            }
        }
        else{
            newAddition += amount;
        }

        setAddition(newAddition);
        updateGoal(index, newAddition);
    };


  return (
    <div className='flex justify-center items-center border-4 flex-col gap-5'>
    
        <div className='font-bold text-lg'>{currentGoal.name || 'Goal Name'}</div>
            <form onSubmit={handleSubmit}>
            <select onChange={handleGoalChange} className='mb-4 p-2 text-sm font-bold outline-0 border-2 bg-green-50 border-black focus:ring-black focus:ring-1 rounded-md text-black'>
                {goals.map((goal: any, index: number) => (
                    <option key={index} value={index}>{goal.name}</option>
                ))}
            </select>
                <div className='flex flex-row w-full gap-5 mb-5'>
                    <select onChange={handleSelectChange} className='p-2 w-32 text-sm font-bold outline-0 border-2 bg-green-50 border-black focus:ring-black focus:ring-1 rounded-md placeholder:text-gray-400 text-black'>
                        <option value="Deposit">Deposit</option>
                        <option value="Withdraw">Withdraw</option>
                    </select>
                    <input 
                        placeholder='$' 
                        className='p-2 w-44 text-sm font-bold outline-0 border-2 bg-green-50 focus:bg-green-200 border-black focus:ring-black focus:ring-1 rounded-md placeholder:text-gray-400 text-black'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='flex justify-center'>
                    <button className='border-2 w-24 text-base py-1 font-bold border-black rounded hover:bg-black hover:text-white bg-gray-100 justify-center transition duration-300 ease-in-out'>Submit</button>
                </div>
        </form>
        <div className='font-bold text-lg'>
            History
        </div>
        <div>
            <div className='flex justify-center items-center'>Date</div>
            <div className='flex justify-center items-center'>Amount: ${addition}/${currentGoal.targetAmount}</div>
        </div>
            
    </div>
  )
}

export default Transactions
