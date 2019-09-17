import React, {useContext} from 'react';
import {TransactionContext} from './TransactionContext';
import ProgressBar from './ProgressBar';

const Balance = () => {

    const[transactions] = useContext(TransactionContext);

    const expenses = [0];
    const incomes = [0];

    transactions.map(transaction => {
        return transaction.type === 'Expense'
        ? expenses.push(Number(transaction.amount)) 
        : incomes.push(Number(transaction.amount));
    })

    const totalExp = expenses.reduce((a,b) => a + b);
    const totalInc = incomes.reduce((a,b) => a + b);
    const totalBalance = totalInc - totalExp;
    const percentage = Math.round((totalExp / totalInc) * 100);
  
    return(
        <div className="topNav">
            
            <div className="containerTop">
                {/* Total In */}
                <h4 className="balance">
                    <i className="fas">&#xf53d;</i>
                    <span className="totals">Total in:</span>
                    <span className="inc totalInc">£{Number(totalInc).toLocaleString('en-GB', {minimumFractionDigits: 2})}</span>
                </h4>
                {/* Total Out */}
                <h4 className="balance borderBalance">
                    <i className="far">&#xf3d1;</i>
                    <span className="totals">Total out:</span>
                    <span className="exp totalExp">{totalExp === 0 ? "" : "-"}£{Number(Math.abs(totalExp)).toLocaleString('en-GB', {minimumFractionDigits: 2})}</span>
                </h4>
                {/* Total Balance */}
                <h4 className="balance"><i className="fas">&#xf24e;</i><span className="totals">Total Balance:</span>{totalBalance > 0 
                    ? (<span className="inc totalInc">£{Number(totalBalance).toLocaleString('en-GB', {minimumFractionDigits: 2})}</span>) 
                    : totalBalance < 0
                    ? (<span className="exp totalExp">-£{Number(Math.abs(totalBalance)).toLocaleString('en-GB', {minimumFractionDigits: 2})}</span>)
                    : (<span className="totalExp">£{totalBalance.toFixed(2)}</span>)
                    }
                </h4>
            </div>
            <ProgressBar percentage={percentage}/>
        </div>
    )
}

export default Balance;



