import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expenseReducer from '../Reducers/expenseReducer';
import filterReducer from '../Reducers/filterReducer';
import thunk from 'redux-thunk';
import authReducer from '../Reducers/auth';


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default ()=>{   
    const store=createStore(combineReducers({
    expenses:expenseReducer,
    filters:filterReducer,
    auth:authReducer

}),composeEnhancers(applyMiddleware(thunk)));
return store;
}

