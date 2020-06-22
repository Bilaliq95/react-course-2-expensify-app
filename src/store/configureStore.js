import {createStore,combineReducers} from 'redux';
import expenseReducer from '../Reducers/expenseReducer';
import filterReducer from '../Reducers/filterReducer';



export default ()=>{   
    const store=createStore(combineReducers({
    expenses:expenseReducer,
    filters:filterReducer
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
return store;
}

// store.subscribe(()=>{          
//     const state=store.getState();
//     const VisibleExpenses=getVisibleExpenses(state.expenses,state.filters);
//     console.log(VisibleExpenses);
// })


// const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100}));
// const expenseTwo=store.dispatch(addExpense({description:'Coffee',amount:3}));
    
// // store.dispatch(removeExpense({id:expenseOne.expense.id}));
// // store.dispatch(editExpense(expenseTwo.expense.id,{description:'blue'}));
//  store.dispatch(setTextFilter('Coffee'));
// // store.dispatch(SortByDate());
// // store.dispatch(SetStartDate(125))
// // store.dispatch(SetEndDate(150));