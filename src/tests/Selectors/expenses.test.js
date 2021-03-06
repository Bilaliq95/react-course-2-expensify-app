import selectExpense from '../../Selectors/expenses';
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
        id:'1',
        description:'Credit Card',
        note:'',
        amount:4500,
        createdAt:moment(0).add(4,'days').valueOf()
        
        }
];

test('Should filter the correct expenses based on text filter',()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpense(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]])
})

test('Should filter the correct expenses based on setStartDate filter',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpense(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]])
})


test('Should filter the correct expenses based on setEndDate filter',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result=selectExpense(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]])
})

test('Should filter the correct expenses based on sort By date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpense(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})


test('Should filter the correct expenses based on sort By amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpense(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
})
