import React, {useContext} from 'react';
import {TransactionContext} from './TransactionContext';

const Transaction = ({id, type, description, amount}) => {

    const[transactions, setTransactions] = useContext(TransactionContext);

    const deleteTransaction = e => {
        const {id} = e.target.parentElement;
        transactions.splice(id, 1);
        setTransactions([...transactions]);
    }

    return(
        <div>
            <h4 id={id} className={type === "Expense" ? "exp descList" : "inc descList"}>
                <span className="descriptionSpan">{description}</span>
                <span className="amountSpan">{type === "Expense" ? "-£" : "£"}{Number(amount).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                <button className="deleteBtn" onClick={deleteTransaction}>x</button>
            </h4>
            <hr />
        </div>
    )
}


export default Transaction;


