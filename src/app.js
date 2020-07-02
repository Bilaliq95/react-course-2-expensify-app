
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


const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));

//switch is like case from html elements