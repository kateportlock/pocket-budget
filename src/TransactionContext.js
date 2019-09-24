import React, {useEffect, useState, createContext} from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = (props) => {

    const[transactions, setTransactions] = useState(
        JSON.parse(localStorage.getItem('transactions')) || []
    );

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions))
    }, [transactions])

    return(
        <TransactionContext.Provider value={[transactions, setTransactions]}>
            {props.children}
        </TransactionContext.Provider>
    )
}


