import React, { useState } from 'react'
// import {goal}

const Transactions = () => {
    const [inputValue, setInputValue] = useState('');
    const [addition, setAddition] = useState(0);
    const [selected, setSelected] = useState('Deposit');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitted');
        const amount = parseFloat(inputValue);
        if(selected === 'Withdraw'){
            if(addition >= amount){
            setAddition(prevAddition => prevAddition - parseFloat(inputValue));
            }else{
                alert('You do not have enough funds');
            }
        }
        else{
            setAddition(prevAddition => prevAddition + parseFloat(inputValue));
        }
    }

  return (
    <div className='flex justify-center items-center border-4 flex-col gap-5'>
        <div className='font-bold text-lg'>//Goal.name</div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-row w-full gap-5 mb-5'>
                    <select onChange={handleSelectChange} className='p-2 w-64 text-sm font-bold outline-0 border-2 bg-green-50 border-black focus:ring-black focus:ring-1 rounded-md placeholder:text-gray-400 text-black'>
                        <option value="Deposit">Deposit</option>
                        <option value="Withdraw">Withdraw</option>
                    </select>
                    <input 
                        placeholder='$' 
                        className='p-2 w-64 text-sm font-bold outline-0 border-2 bg-green-50 focus:bg-green-200 border-black focus:ring-black focus:ring-1 rounded-md placeholder:text-gray-400 text-black'
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
            <div className='flex justify-center items-center'>Amount: ${addition}</div>
        </div>
            
    </div>
  )
}

export default Transactions