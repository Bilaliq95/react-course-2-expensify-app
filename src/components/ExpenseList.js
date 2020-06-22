import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../Selectors/expenses'




export const ExpenseList=(props)=>(
    <div>
    {
        props.expenses.length===0?(<p>No Expenses</p>):(

            props.expenses.map((expense)=>{
                return(
                  <ExpenseListItem key={expense.id} expense={expense}/>
            )
            })
        )
    }
     
   

    </div>
)

const mapStateToProps=(state)=>{
    return{
        expenses:getVisibleExpenses(state.expenses,state.filters) //We will use the same name we used in the store.
    }

}


export default connect(mapStateToProps)(ExpenseList)

 