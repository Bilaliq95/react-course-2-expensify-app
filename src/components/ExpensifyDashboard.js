import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilter'
import getExpensesTotal from '../Selectors/expenses-total'
import expenses from '../tests/fixtures/expenses'
import ExpensesSummary from '../components/ExpensesSummary'
const ExpensifyDashboard=()=>(
    <div>
    <ExpensesSummary/>
    <ExpenseListFilter/>    
     <ExpenseList/>
    </div>
    
    );

 export default ExpensifyDashboard;   