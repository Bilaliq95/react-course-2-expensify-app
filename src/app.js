
// cd Desktop/react_projects/expensify-app
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import AppRouter,{history} from './Router/AppRouter';
import './styles/styles.scss';
import configurestore from './store/configureStore';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css'; 
import {firebase}  from './firebase/firebase';
import {startSetExpenses} from './Actions/expenses';
import {login,logout} from './Actions/auth';





const store=configurestore();  
 

const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
)

let hasRendered=false;
const renderApp=()=>{
    if(!hasRendered)
    {
        ReactDOM.render(jsx,document.getElementById('app')); 
        hasRendered=true;
    }
}

ReactDOM.render(<h1>Loading</h1>,document.getElementById('app'));



firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{                //Why does this return a promise? 
           renderApp();
           if(history.location.pathname==='/'){
               history.push('/dashboard')
           }
        });
    }
    else{
        store.dispatch(logout());
        renderApp();
        history.push('/');

    }
});

//switch is like case from html elements