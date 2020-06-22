
// cd Desktop/react_projects/expensify-app
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import AppRouter from './Router/AppRouter';
import {addExpense,removeExpense,editExpense} from './Actions/expenses';
import {SortByDate,SortByAmount,setTextFilter,SetStartDate,SetEndDate} from './Actions/filter'
import './styles/styles.scss';
import getVisibleExpenses from './Selectors/expenses';
import configurestore from './store/configureStore';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css'; 




const store=configurestore();
store.dispatch(addExpense({description:'Water Bill',amount:4500}));
store.dispatch(addExpense({description:'Gas Bill'}));

// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));
const state=store.getState();
//console.log(getVisibleExpenses(state.expenses,state.filters));

const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));

//switch is like case from html elements