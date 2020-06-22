import expenseReducer from '../../Reducers/expenseReducer'
import moment from 'moment'
const expenses=[
    {
id:'1',
description:'Gum',
note:'',
amount:195,
createdAt:0

},

{
    id:'2',
    description:'Rent',
    note:'',
    amount:19500,
    createdAt:moment(0).subtract(4,'days').valueOf()
    
    },

    {
        id:'3',
        description:'Credit Card',
        note:'',
        amount:4500,
        createdAt:moment(0).add(4,'days').valueOf()
        
        }
];
test('Should add the expense correctly',()=>{
    const action={
        type:'ADD_EXPENSE',
        expense:{
            id:'4',
            description:'Iphone',
            note:'',
            amount:6000,
            createdAt:0
        }


    }
    const result=expenseReducer(expenses,action);
    expect( result).toEqual([...expenses,action.expense]);
})


test('Should remove the expense correctly',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:3


    }
    const result=expenseReducer(expenses,action);
    expect(result).toEqual([expenses[0],expenses[1]]);
})


test('Should edit the expense correctly',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:'3',  //Why is this a key value pair?
        updates:{
            description:'samsung'
        }
    }

   const  expense={
        id:'3',
        description:'samsung',
        note:'',
        amount:4500,
        createdAt:moment(0).add(4,'days').valueOf()

    }
    const result=expenseReducer(expenses,action);
    expect(result).toEqual([expenses[0],expenses[1],expense]);
})


test('Should return the default expenses correctly',()=>{
    const action={
        type:'BLAH'
    }

  
    const result=expenseReducer(expenses,action);
    expect(result).toEqual(expenses);
})

