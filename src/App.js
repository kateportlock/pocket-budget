import React from 'react';
import './App.css';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import Balance from './Balance';
import {TransactionProvider} from './TransactionContext';

const App = () => {
  return(
    <TransactionProvider>
      <div className="app">
        <div className="flex">
          <Balance />
        </div>
        <AddTransaction />
        <TransactionList />
      </div>
    </TransactionProvider>
  )
}

export default App;
