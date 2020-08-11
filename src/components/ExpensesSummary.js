
import React from 'react'
import {connect} from 'react-redux'
import getVisibleExpenses from '../Selectors/expenses'
import getExpensesTotal from '../Selectors/expenses-total'
import numeral from 'numeral'
import {Link} from 'react-router-dom';

const ExpensesSummary=(props)=>(
    <div className="page-header">
    <div className="content-container">
    {
    props.expenses.length>1?(<h1 className="page-header__title">{`Viewing ${props.expenses.length} expenses totalling ${numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')}`}</h1>):(
     <h1 className="page-header__title">{ `Viewing ${props.expenses.length} expense totalling ${numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')}` 
     }</h1>)    
    }
    <div className="page-header__actions">
    <Link className="button" to="/create">Add Expense</Link> 
    </div>
    </div>
    </div>
)

const mapStateToProps=(state)=>{
    return{
        expenses:getVisibleExpenses(state.expenses,state.filters) //We will use the same name we used in the store.
    }

}


export default connect(mapStateToProps)(ExpensesSummary)