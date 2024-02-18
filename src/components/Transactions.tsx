import React, { useEffect, useState } from 'react'
import { getTransactions, updateGoal } from '../logic/Transactions';
import TransactionItem from './TransactionItem';

const Transactions = () => {
    const [inputValue, setInputValue] = useState('');
    const [contributionAmount, setContributionAmount] = useState(0);
    const [selected, setSelected] = useState('Deposit');
    const [currentGoal, setCurrentGoal] = useState({name: '', body: '', targetAmount: 0, contributedAmount: 0});
    const [index, setIndex] = useState(0);
    const [changedGoal, setChangedGoal] = useState(false);

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
        setChangedGoal(true);

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
        if (!amount)
            return;
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
        updateGoal(index, selected === 'Withdraw' ? -amount : amount);
        setTransactions(getTransactions());
        location.reload();
    };

    const [transactions, setTransactions] = useState(getTransactions());
    let hasTransactions = false;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].goal === currentGoal.name) {
            hasTransactions = true;
            break;
        }
    }


  return (
    <div className='flex items-center flex-col gap-5 rounded-xl border-primary-400 bg-gray-900 border-4 m-8 p-5 h-[90vh]'>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row w-full gap-5 mb-5 justify-center text-center">
                    <select onChange={handleGoalChange} className='text-3xl font-bold text-center text-white border-none select-none bg-gray-900'>
                        <option value="" disabled selected>Select a Goal</option>
                        {goals.map((goal: any, index: number) => (
                            <option key={index} value={index}>{goal.name}</option>
                        ))}
                    </select>
                </div>
                {changedGoal ? 
                <div>
                <div className='flex flex-row w-full gap-5 mb-5'>
                    <select onChange={handleSelectChange} className='w-32 py-2 px-4 rounded-xl text-sm outline-0 bg-gray-700 hover:bg-gray-800 focus:ring-black focus:ring-1 rounded-md text-gray-400'>
                        <option value="Deposit">Deposit</option>
                        <option value="Withdraw">Withdraw</option>
                    </select>
                    <input 
                        placeholder='$' 
                        className='p-2 w-44 text-sm w-full bg-gray-700 py-1 px-3 rounded-xl font-bold outline-0 focus:bg-gray-800 placeholder:text-gray-400'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-secondary-400 hover:bg-secondary-500 py-2 px-4 rounded-xl'>Submit</button>
                </div>
                <div className='flex justify-center items-center'>Amount: ${contributionAmount}/${currentGoal.targetAmount}</div>
                </div>
                
                :
                <div className="relative flex items-center justify-center min-h-96">
                    <h1 className='text-3xl font-bold text-center text-white border-none select-none bg-gray-900'>Select a Goal to Get Started!</h1>
            </div>}
            
        </form>
        
        {hasTransactions ? <h2 className='text-2xl font-bold text-center'>
            Transactions
        </h2> : null}
            <ul className='px-4 flex flex-col max-h-[40vh] items-center overflow-y-scroll'>
            {
                transactions.map((transaction, index) => { return transaction.goal === currentGoal.name ? 
                <li key={index} className='w-full py-2'>
                    <TransactionItem transaction={transaction}/>
                </li> : null})
            }
            </ul>
    </div>
  )
}

export default Transactions
