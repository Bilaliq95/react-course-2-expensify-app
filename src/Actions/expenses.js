import uuid from 'uuid';
import database from '../firebase/firebase'
import expenses from '../tests/fixtures/expenses';


//Action Generators

export const addExpense=(expense)=>{
   
    return{
        type:'ADD_EXPENSE',
        expense
    }
}

export const startAddExpense=(expenseData={})=>{
return (dispatch)=>{
const {
    description='',
    note='',
    amount=0,
    createdAt=0

}=expenseData;
const expense={description,note,amount,createdAt};
return database.ref('expenses').push(expense).then((ref)=>{  //This returns a promise
    dispatch(addExpense({
        id:ref.key,
        ...expense
    }));
})
}
}


export const removeExpense=({id})=>{
return{
    type:'REMOVE_EXPENSE',
    id
}
}

export const startRemoveExpense=({id})=>{
return (dispatch)=>{
database.ref('expenses/'+id).set(null).then(()=>{
    dispatch(removeExpense({id}));
});
}
}

export const editExpense=(id,updates)=>{
    return{
    type:'EDIT_EXPENSE',
    id,
    updates
}
}

export const startEditExpense=(id,updates)=>{

return (dispatch)=>{
    database.ref('expenses/'+id).update(updates).then(()=>{
        dispatch(editExpense(id,updates));
    });
}
}

//SET EXPENSES
export const setExpenses=(expenses)=>{
    return {
        type:'SET_EXPENSES',
        expenses
    }
}

export const startSetExpenses=()=>{
    return(dispatch)=>{
    
      return  database.ref('expenses').once('value').then((snapshot) => {
        const expenses = [];   
                snapshot.forEach((childSnapsot) => { 
                    expenses.push({
                        id: childSnapsot.key,
                        ...childSnapsot.val()
                    });

                }); 
                dispatch(setExpenses(expenses))
            });
            
    };
};