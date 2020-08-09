import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ErrorPage from '../components/ErrorPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history= createHistory();

              
    const AppRouter=()=>(
        <Router history={history}> 
        <div>
       <Switch>
       <PublicRoute path="/" component={LoginPage} exact={true}  />
        <PrivateRoute path="/dashboard" component={ExpensifyDashboard}  />
        <PrivateRoute path="/create" component={AddExpensePage}/>
        <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
        <Route  component={ErrorPage}/>
        </Switch>
        </div>
        </Router>
    )

    export default AppRouter; 