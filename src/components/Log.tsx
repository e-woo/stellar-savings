import React, { useEffect } from 'react';

const Log = () => {
    useEffect(() => {
        const goals = JSON.parse(localStorage.getItem('goals') || '[]');
        console.log(goals);
    }, []);

    return (
        <div className='flex justify-center items-center flex-col gap-5 rounded-xl border-primary-400 border-4 m-8 p-5'>
        <div className='font-bold text-lg'>
            Transaction Log
        </div>
        <div className='flex flex-row justify-evenly w-full'>
            <div className='flex justify-center items-center'>Time: </div>
            <div className='flex justify-center items-center'>Amount: </div>
        </div>
            
    </div>
  )
}

export default Log;