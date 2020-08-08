const expensesReduxDefaultState=[];

const expenseReducer=(state=expensesReduxDefaultState,action)=>{
    switch(action.type)
    {
        case 'ADD_EXPENSE':
            return [...state,action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter((value)=>{
                  return value.id!=action.id  
            })    
        case 'EDIT_EXPENSE': 
        return state.map((expense)=>{
               if(expense.id===action.id)
               {
                 
                    return{
                        ...expense,
                        ...action.updates
                    }
            
               } 
               else{
                   return expense   //Why is this else important?
               }

             
        })
        case 'SET_EXPENSES':
            return action.expenses;
        
        default:
            return state;
    }

}

export default expenseReducer; 