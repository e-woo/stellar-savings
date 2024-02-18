import React from 'react';

const Planet3 = () => {

    let transactionCount = JSON.parse(localStorage.getItem('transactionCount') || '0');

    return (
        <div className='relative'>
            <img className='w-24 h-24' src='src/assets/planet3.png' alt='Planet3'></img>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                <p className='text-sm font-bold'>{transactionCount} transactions made!</p>
            </div>
        </div>
    );
};

export default Planet3;
