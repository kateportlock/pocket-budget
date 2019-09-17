import React, {useState, useContext} from 'react';
import {TransactionContext} from './TransactionContext';

const AddTransaction = () => {

    const[transactions, setTransactions] = useContext(TransactionContext);
    const[description, setDescription] = useState('');
    const[amount, setAmount] = useState('');
    const[type, setType] = useState('');

    const updateDescription = e => {
        setDescription(e.target.value);
    }

    const updateAmount = e => {
        isNaN(e.target.value) ? alert('Please enter a number!') : setAmount(e.target.value);
    }

    const updateType = e => { 
        setType(e.target.value);
    }


    const addTransaction = e => {
        e.preventDefault();
        setTransactions(prevTransactions => [...prevTransactions, {type: type, description: description, amount: amount}]);
        setDescription('');
        setAmount('');
        setType('');
    }

    return(
        <div>
            <form onSubmit={addTransaction}>
                <select name="transactionType" value={type} onChange={updateType}>
                    <option>Income</option>
                    <option>Expense</option>
                </select>
                <input className="descriptionInp" type="text" value={description} name="description" onChange={updateDescription} placeholder="Description" required />
                <input className="amountInp" type="text" value={amount} name="amount" onChange={updateAmount} placeholder="Amount" required />
                <button className="addBtn">Add</button>
            </form>
            {transactions.length === 0 && <h3 className="noList">Add your first transaction!</h3>}
        </div>
    )
}


export default AddTransaction;