import React, {useContext} from 'react';
import Transaction from './Transaction';
import {TransactionContext} from './TransactionContext';


const TransactionList = () => {

    const[transactions] = useContext(TransactionContext); 

    return(
        <div className="transactionList">
            {transactions.map((transaction, i) => (
                <Transaction key={i} id={i} type={transaction.type} description={transaction.description} amount={transaction.amount} />
            ))}
        </div>
    )
}

export default TransactionList; 

