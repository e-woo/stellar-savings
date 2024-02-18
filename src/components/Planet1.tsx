import React from 'react';
import { getTransactions } from '../logic/Transactions';

const Planet1 = () => {

    const transactions = getTransactions();

    let total = 0;

    for (let i = 0; i < transactions.length; i++) {
        total += transactions[i].amount;
    }

    return (
        <div className='relative'>
            <img className='w-24 h-24' src='src/assets/planet1.png' alt='Planet1'></img>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                <p className='text-sm font-bold'>${total} saved!</p>
            </div>
        </div>
    );
};

export default Planet1;
