import React from 'react'
import { Transaction } from '../logic/Transactions'

const TransactionItem = ( { transaction } : { transaction: Transaction} ) => {
  return (
    <div className='relative flex flex-col bg-gray-800 rounded-xl overflow-hidden border-4 border-primary-400 p-4'>
        <div className='flex flex-col gap-2'> 
            <h3 className='text-lg font-semibold text-wrap'>{transaction.time}</h3>
            <p className='text-wrap'>{transaction.type === 'Withdraw' ? 'Withdrew $' : 'Deposited $'}{transaction.amount}</p>
        </div>
    </div>
  )
}

export default TransactionItem
