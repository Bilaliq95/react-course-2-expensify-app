import {createStore} from 'redux';

//Action generators
const incrementCount=({incrementBy=1}={})=>{
    return{
        type:'INCREMENT',
        IncrementBy:incrementBy

    }
}

const decrementCount=({decrementBy=1}={})=>{
return {
    type:'DECREMENT',
    DecrementBy:decrementBy
}
}

const resetCount=()=>{
    return{
        type:'RESET'
    }
}


const countReducer= (state={count:0},action)=>{
    switch (action.type){
        
    case 'INCREMENT':
        return{
            count:state.count+action.IncrementBy
        };
    case 'DECREMENT':
        return{
            count:state.count-action.DecrementBy
        };
    
    case 'RESET':
        return{
            count:0
        };      
    default:
        return state;
    }
}

const store=createStore(countReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(decrementCount({decrementBy:5}))

store.dispatch(resetCount())


