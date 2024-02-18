import { useEffect, useState } from 'react';
import { getTransactions } from '../logic/Transactions';
import TransactionItem from './TransactionItem';

const Log = ( { currentGoal } : { currentGoal: string }) => {

    const [transactions] = useState(getTransactions());
    let hasTransactions = false;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].goal === currentGoal) {
            hasTransactions = true;
            break;
        }
    }

    return (<>
        {hasTransactions ? <h2 className='text-2xl font-bold text-center'>
            Transactions
        </h2> : null}
            <ul className='px-4 flex flex-col max-h-[40vh] items-center overflow-y-scroll'>
            {
                transactions.map((transaction, index) => { return transaction.goal === currentGoal ? 
                <li key={index} className='w-full py-2'>
                    <TransactionItem transaction={transaction}/>
                </li> : null})
            }
            </ul></>
            
  )
}

export default Log;